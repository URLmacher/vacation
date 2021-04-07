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
<style scoped lang="scss">
.home {
  max-width: 1280px;
  margin: auto;
  padding: 0 24px;

  &__calendar-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
}
</style>
