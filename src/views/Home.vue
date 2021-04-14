<template>
  <div class="home">
    <div class="home__calendar-grid">
      <Calendar
        v-for="month of vacationMonths"
        :key="month"
        :month="month"
        :year="vacationYear"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Calendar from '@/components/Calendar.vue';
import { defineComponent } from 'vue';
import { vacationMonths, vacationYear } from '@/data/data';

export default defineComponent({
  name: 'Home',
  components: {
    Calendar
  },
  setup() {
    return { vacationMonths, vacationYear };
  }
});
</script>
<style lang="scss">
.home {
  @include vacation-container;

  &__calendar-grid {
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
}
</style>
