<template>
  <div class="graphs">
    <TimeAllocationChart />
    <div class="graphs__mini-charts">
      <MoodChart
        :title="`Freude`"
        :emojisLeft="[`🙂`]"
        :emojisRight="[`😃`]"
      />
      <MoodChart
        :title="`Arbeitskraft`"
        :emojisLeft="[`👨🏻‍💻`]"
        :emojisRight="[`👨🏻‍💻`,`👨🏻‍💻`,`👨🏻‍💻`]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeAllocationChart from '@/components/TimeAllocationChart.vue';
import MoodChart from '@/components/MoodChart.vue';

export default defineComponent({
  name: 'Graphs',
  components: {
    TimeAllocationChart,
    MoodChart
  },
  setup() {
    return {};
  }
});
</script>
<style lang="scss">
.graphs {
  @include vacation-container;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @include window-medium {
    grid-template-columns: 1fr min-content;
  }

  &__mini-charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    grid-gap: 8px;

    @include window-medium {
      grid-template-columns: min-content;
      grid-template-rows: min-content min-content;
    }
  }
}
</style>
