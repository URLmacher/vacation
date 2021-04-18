<template>
  <div class="stats">
    <ul class="stats__list">
      <h5 class="stats__title">Zusammenfassung</h5>
      <li class="stats__list-item">
        <p>Urlaubstage:</p>
        <p>{{vacationDayDates.length}}</p>
      </li>
      <li class="stats__list-item">
        <p>Urlaubsstunden Guthaben:</p>
        <p>{{accumulatedVacationHours}}*</p>
      </li>
      <li class="stats__list-item">
        <p>Guthaben in Tagen:</p>
        <p>{{vacationAvailable}}*</p>
      </li>
      <li class="stats__list-item">
        <p>Urlaubstag in Stunden:</p>
        <p>{{vacationDayInHoursFormatted}}</p>
      </li>
      <small class="stats__list-sub">*Stand: {{timeOfLastUpdate}}</small>
    </ul>
    <ul class="stats__list">
      <div class="stats__title">
        <h5>Urlaubstermine</h5>
        <a :href="exportCalendarLink">Export</a>
      </div>
      <li
        class="stats__list-item"
        v-for="vacationDayDate in vacationDayDates"
        :key="vacationDayDate"
      >
        <p>{{getFormattedVacationDayName(vacationDayDate)}}</p>
        <p>{{getFormattedVacationDayDate(vacationDayDate)}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import {
  vacationDayDates,
  accumulatedVacationHours,
  vacationDayInHours,
  lastUpdatedDate,
  exportCalendarLink
} from '@/data/data';
import { DateHelper } from '@/helpers/DateHelper';

const dateHelper = new DateHelper();

export default defineComponent({
  name: 'Stats',
  components: {},
  setup() {
    const vacationAvailable: ComputedRef<number> = computed(() => {
      return Math.round(accumulatedVacationHours / vacationDayInHours);
    });
    const timeOfLastUpdate: ComputedRef<string> = computed(() => {
      return dateHelper.formatDate(lastUpdatedDate, 'MMMM');
    });
    const vacationDayInHoursFormatted: ComputedRef<string> = computed(() => {
      return dateHelper.formatHours(vacationDayInHours);
    });
    const getFormattedVacationDayName = (date: string): string => {
      return dateHelper.formatDate(date, 'dddd');
    };
    const getFormattedVacationDayDate = (date: string): string => {
      return dateHelper.formatDate(date, 'DD.MM');
    };
    return {
      vacationDayDates,
      accumulatedVacationHours,
      vacationAvailable,
      vacationDayInHoursFormatted,
      timeOfLastUpdate,
      getFormattedVacationDayName,
      getFormattedVacationDayDate,
      exportCalendarLink
    };
  }
});
</script>
<style lang="scss">
.stats {
  @include vacation-container;

  &__list {
    @include glass-container;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    list-style: none;
    margin: 40px auto var(--content-spacing) auto;
  }

  &__title {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list-item {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px solid var(--border-color);
  }

  &__list-sub {
    margin: 8px 0 0 auto;
  }
}
</style>
