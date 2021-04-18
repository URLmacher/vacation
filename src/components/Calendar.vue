<template>
  <div class="calendar">
    <h5 class="calendar__title">{{monthName}}</h5>
    <div
      v-for="dayOfMonth of daysOfMonth"
      class="calendar__day"
      :class="[
      `calendar__day--${dayOfMonth.dayName}`,
      `calendar__day--${getHolidayClass(dayOfMonth.momentOfDay)}`,
      `calendar__day--${getVacationDayClass(dayOfMonth.momentOfDay)}`
      ]"
      :key="dayOfMonth.day"
    >
      <h6 class="calendar__day-name">{{dayOfMonth.day}}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import Moment from 'moment';
import { DateHelper } from '@/helpers/DateHelper';
import { ref, defineComponent, computed, ComputedRef } from 'vue';

const dateHelper = new DateHelper();

export default defineComponent({
  props: {
    month: { type: Number, required: true },
    year: { type: Number, required: true }
  },
  setup(props: { month: number; year: number }) {
    const monthName: ComputedRef<string> = computed(() => {
      return dateHelper.getMonthName(props.month);
    });

    const getHolidayClass = (date: Moment.Moment): string => {
      return dateHelper.isHoliday(date) ? 'is-holiday' : '';
    };

    const getVacationDayClass = (date: Moment.Moment): string => {
      return dateHelper.isVacationDay(date) ? 'is-vacation' : '';
    };

    const daysOfMonth = ref(dateHelper.getMonth(props.month, props.year));
    return {
      daysOfMonth,
      monthName,
      getHolidayClass,
      getVacationDayClass,
    };
  }
});
</script>

<style scoped lang="scss">
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: min-content repeat(6, 1fr);
  gap: 8px;

  &__title {
    grid-column: 1 / -1;
    text-align: center;
  }

  &__day {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--highlight-one);

    &--monday {
      grid-column-start: 1;
    }
    &--tuesday {
      grid-column-start: 2;
    }
    &--wednesday {
      grid-column-start: 3;
    }
    &--thursday {
      grid-column-start: 4;
    }
    &--friday {
      grid-column-start: 5;
    }
    &--saturday {
      grid-column-start: 6;
      background-color: var(--highlight-two);
    }
    &--sunday {
      grid-column-start: 7;
      background-color: var(--highlight-two);
    }
    &--is-holiday {
      background-color: var(--highlight-three);
    }
    &--is-vacation {
      background-color: var(--highlight-four);
    }
  }
}
</style>