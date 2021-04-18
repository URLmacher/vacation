<template>
  <div class="calendar-view">
    <div class="calendar-view__grid">
      <Calendar
        v-for="month of vacationMonths"
        :key="month"
        :month="month"
        :year="vacationYear"
      />
    </div>
    <div class="calendar-view__legend">
      <div class="calendar-view__legend-row">
        <div class="calendar-view__legend-item"></div>
        <p>Arbeitstag</p>
      </div>
      <div class="calendar-view__legend-row">
        <div class="calendar-view__legend-item calendar-view__legend-item--weekend"></div>
        <p>Wochendende</p>
      </div>
      <div class="calendar-view__legend-row">
        <div class="calendar-view__legend-item calendar-view__legend-item--holiday"></div>
        <p>Feiertag</p>
      </div>
      <div class="calendar-view__legend-row">
        <div class="calendar-view__legend-item calendar-view__legend-item--vacation"></div>
        <p>Urlaubstag</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Calendar from '@/components/Calendar.vue';
import { defineComponent } from 'vue';
import { vacationMonths, vacationYear } from '@/data/data';

export default defineComponent({
  name: 'CalendarView',
  components: {
    Calendar
  },
  setup() {
    return { vacationMonths, vacationYear };
  }
});
</script>
<style lang="scss">
.calendar-view {
  @include vacation-container;
  margin-top: 40px;

  &__grid {
    padding-bottom: var(--content-spacing);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--content-spacing);

    @include window-medium {
      grid-template-columns: 1fr 1fr;
    }

    @include window-large {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &__legend {
    @include glass-container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-end;
    grid-gap: 8px;
    align-items: center;

    @include window-small {
      display: flex;
    }
  }

  &__legend-row {
    display: flex;
    align-items: center;
  }

  &__legend-item {
    height: 30px;
    width: 30px;
    margin: 0 8px;
    background-color: var(--highlight-one);
    &--weekend {
      background-color: var(--highlight-two);
    }
    &--holiday {
      background-color: var(--highlight-three);
    }
    &--vacation {
      background-color: var(--highlight-four);
    }
  }
}
</style>
