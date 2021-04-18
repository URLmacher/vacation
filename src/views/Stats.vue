<template>
  <div class="stats">
    <StatsList
      :list="factsList"
      :title="`Zusammenfassung`"
      :smallText="timeOfLastUpdate"
    />
    <StatsList
      :list="vactionDayList"
      :title="`Urlaubstermine`"
      :link="link"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StatsList from '@/components/StatsList.vue';
import { ILink, IStatsList } from '@/data/interfaces';
import { DateHelper } from '@/helpers/DateHelper';
import {
  vacationDayDates,
  accumulatedVacationHours,
  vacationDayInHours,
  lastUpdatedDate,
  exportCalendarLink
} from '@/data/data';

const dateHelper = new DateHelper();

export default defineComponent({
  name: 'Stats',
  components: { StatsList },
  setup() {
    const vacationAvailable = Math.round(
      accumulatedVacationHours / vacationDayInHours
    );

    const timeOfLastUpdate = `*Stand: ${dateHelper.formatDate(
      lastUpdatedDate,
      'MMMM'
    )}`;
    const vacationDayInHoursFormatted = dateHelper.formatHours(
      vacationDayInHours
    );
    const getFormattedVacationDayName = (date: string): string => {
      return dateHelper.formatDate(date, 'dddd');
    };
    const getFormattedVacationDayDate = (date: string): string => {
      return dateHelper.formatDate(date, 'DD.MM');
    };

    const link: ILink = {
      linkText: 'Export',
      linkSrc: exportCalendarLink
    };

    const vactionDayList: IStatsList[] = vacationDayDates.map(date => {
      return {
        listText: getFormattedVacationDayName(date),
        listValue: getFormattedVacationDayDate(date)
      };
    });

    const factsList: IStatsList[] = [
      {
        listText: 'Urlaubstage',
        listValue: vacationDayDates.length
      },
      {
        listText: 'Urlaubsstunden Guthaben',
        listValue: `${accumulatedVacationHours}*`
      },
      {
        listText: 'Guthaben in Tagen',
        listValue: `${vacationAvailable}*`
      },
      {
        listText: 'Urlaubstag in Stunden',
        listValue: vacationDayInHoursFormatted
      }
    ];
    return {
      factsList,
      vactionDayList,
      timeOfLastUpdate,
      link
    };
  }
});
</script>
<style lang="scss">
.stats {
  @include vacation-container;
  margin-top: 40px;
}
</style>
