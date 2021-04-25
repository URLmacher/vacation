<template>
  <div class="mood-chart">
    <h5 class="mood-chart__title">{{title}}</h5>
    <div class="mood-chart__chart-wrapper">
      <div
        v-for="emoji of emojisLeft"
        :key="emoji"
        class="mood-chart__emoji"
      >{{emoji}}</div>
      <span class="mood-chart__icon material-icons">arrow_forward</span>
      <div
        v-for="emoji of emojisRight"
        :key="emoji"
        class="mood-chart__emoji"
      >{{emoji}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, required: true },
    emojisRight: { type: Array, required: true },
    emojisLeft: { type: Array, required: true }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.mood-chart {
  @include glass-container;
  height: min-content;

  &__title {
    margin-bottom: 16px;
  }

  &__chart-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    margin: 0 var(--content-spacing);
    font-weight: bold;
  }

  &__emoji {
    font-size: 25px;
  }
}
</style>