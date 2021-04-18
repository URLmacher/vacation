<template>
  <div class="calendar-view">
    <div class="calendar-view__grid">
      <Calendar
        v-for="month of vacationMonths"
        :key="month"
        :month="month"
        :year="vacationYear"
      />
      <div class="calendar-view__legend">
        <div class="calendar-view__legend-item"></div>
        <p class="calendar-view__legend-description">Arbeitstag</p>
        <div class="calendar-view__legend-item calendar-view__legend-item--weekend"></div>
        <p class="calendar-view__legend-description">Wochendende</p>
        <div class="calendar-view__legend-item calendar-view__legend-item--holiday"></div>
        <p class="calendar-view__legend-description">Feiertag</p>
        <div class="calendar-view__legend-item calendar-view__legend-item--vacation"></div>
        <p class="calendar-view__legend-description">Urlaubstag</p>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 169px;
    align-items: center;
    gap: 8px;
  }

  &__legend-item {
    height: 30px;
    width: 30px;
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
