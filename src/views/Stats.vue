<template>
  <div class="stats">
    <ul class="stats__list">
      <h5 class="stats__title">Daten</h5>
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
      <h5 class="stats__title">Urlaubstermine</h5>
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
  lastUpdatedDate
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
      getFormattedVacationDayDate
    };
  }
});
</script>
<style lang="scss">
.stats {
  @include vacation-container;

  &__title {
    margin-bottom: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    list-style: none;
    padding: 0;
    margin: 40px auto var(--content-spacing) auto;
  }

  &__list-item {
    display: flex;
    justify-content: space-between;
    padding: 0;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--border-color);
  }

  &__list-sub {
    margin: 8px 0 0 auto;
  }
}
</style>
