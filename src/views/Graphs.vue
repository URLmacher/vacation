<template>
  <div class="graphs">
    <TimeAllocationChart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeAllocationChart from '@/components/TimeAllocationChart.vue';

export default defineComponent({
  name: 'Graphs',
  components: {
    TimeAllocationChart
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
}
</style>
