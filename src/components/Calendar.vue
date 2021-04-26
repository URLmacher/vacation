<template>
  <div class="calendar">
    <h5 class="calendar__title">{{monthName}}</h5>
    <div
      v-for="dayOfMonth of daysOfMonth"
      class="calendar__day"
      :class="[
      `calendar__day--${dayOfMonth.dayName}`,
      `calendar__day--${dayOfMonth.isHoliday ? 'is-holiday' : ''}`,
      `calendar__day--${dayOfMonth.isVacationDay ? 'is-vacation' : ''}`
      ]"
      :key="dayOfMonth.day"
    >
      <h6 class="calendar__day-name">{{dayOfMonth.day}}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { DateHelper, IDaysOfMonth } from '@/helpers/DateHelper';
import { ref, defineComponent, computed, ComputedRef, Ref } from 'vue';

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

    const daysOfMonth: Ref<IDaysOfMonth[]> = ref(
      dateHelper.getMonth(props.month, props.year)
    );

    return {
      daysOfMonth,
      monthName
    };
  }
});
</script>

<style scoped lang="scss">
.calendar {
  @include glass-container;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: min-content repeat(6, 1fr);
  gap: 8px;

  &__title {
    grid-column: 1 / -1;
    text-align: right;
    margin-bottom: 8px;
  }

  &__day {
    width: 100%;
    height: 50px;
    border-radius: var(--border-radius);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--highlight-one);

    &--montag {
      grid-column-start: 1;
    }
    &--dienstag {
      grid-column-start: 2;
    }
    &--mittwoch {
      grid-column-start: 3;
    }
    &--donnerstag {
      grid-column-start: 4;
    }
    &--freitag {
      grid-column-start: 5;
    }
    &--samstag {
      grid-column-start: 6;
      background-color: var(--highlight-two);
    }
    &--sonntag {
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