<template>
  <div class="home">
    <div class="home__calendar-grid">
      <Calendar
        :month="4"
        :year="2021"
      />
      <Calendar
        :month="5"
        :year="2021"
      />

    </div>
  </div>
</template>

<script lang="ts">
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'Home',
  components: {
    Calendar
  }
};
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
