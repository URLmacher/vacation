<template>
  <div class="calendar">
    <h1 class="calendar__title">{{monthName}}</h1>
    <div
      v-for="dayOfMonth of daysOfMonth"
      class="calendar__day"
      :class="`calendar__day--${dayOfMonth.dayName}`"
      :key="dayOfMonth.day"
    >
      <h3 class="calendar__day-name">{{dayOfMonth.day}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Moment from 'moment';
import { ref, defineComponent, computed, ComputedRef } from 'vue';

export default defineComponent({
  props: {
    month: { type: Number, required: true },
    year: { type: Number, required: true }
  },
  setup(props: { month: number; year: number }) {
    const monthName: ComputedRef<string> = computed(() => {
      return Moment(`${props.month}`, 'M').format('MMMM');
    });

    const getMonth = (month: number, year: number): IDaysOfMonth[] => {
      const daysOfMonth: IDaysOfMonth[] = [];
      const daysInMonth = Moment(`${month}-${year}`, 'M-YY').daysInMonth();
      for (let i = 1; i < daysInMonth + 1; i++) {
        const momentOfDay = Moment(`${i}-${month}-${year}`, 'D-M-YY');
        daysOfMonth.push({
          day: i,
          momentOfDay,
          dayName: momentOfDay.format('dddd').toLowerCase()
        });
      }
      return daysOfMonth;
    };
    const daysOfMonth = ref(getMonth(props.month, props.year));
    return { daysOfMonth, monthName };
  }
});

export interface IDaysOfMonth {
  momentOfDay: Moment.Moment;
  dayName: string;
  day: number;
}
</script>

<style scoped lang="scss">
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: min-content auto;
  gap: 8px;

  &__title {
    grid-column: 1 / -1;
  }

  &__day {
    width: 100%;
    min-height: 50px;
    box-sizing: border-box;
    background-color: green;

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
      background-color: yellow;
    }
    &--sunday {
      grid-column-start: 7;
      background-color: yellow;
    }
  }
}
</style>