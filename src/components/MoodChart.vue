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
:root {
  --mood-chart-font-size:25px;
}

@include window-medium {
  :root {
    --mood-chart-font-size: 55px;
  }
}

.mood-chart {
  @include glass-container;
  height: min-content;
  --mood-chart-font-size: 35px;

  @include window-medium {
    --mood-chart-font-size: 55px;
  }

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
    font-size: var(--mood-chart-font-size);
  }

  &__emoji {
    font-size: var(--mood-chart-font-size);
  }
}
</style>