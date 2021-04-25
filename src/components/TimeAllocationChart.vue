<template>
  <div class="time-allocation-chart">
    <h5 class="time-allocation-chart__title">Verteilung</h5>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { DateHelper } from '@/helpers/DateHelper';
import { defineComponent } from 'vue';
import { vacationMonths, vacationYear } from '@/data/data';

const dateHelper = new DateHelper();

export default defineComponent({
  setup() {
    const series = [
      {
        name: 'Urlaub',
        data: vacationMonths.map(month =>
          dateHelper.getVacationDayCount(month, vacationYear)
        )
      },
      {
        name: 'Arbeit',
        data: vacationMonths.map(month =>
          dateHelper.getWorkDayCount(month, vacationYear)
        )
      },
      {
        name: 'Wochenende, Feiertag',
        data: vacationMonths.map(month =>
          dateHelper.getOtherCount(month, vacationYear)
        )
      }
    ];

    const chartOptions = {
      chart: {
        stacked: true,
        stackType: '100%'
      },
      toolbar: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 0,
        colors: ['#fff']
      },
      xaxis: {
        categories: vacationMonths.map(month => dateHelper.getMonthName(month)),
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      tooltip: {
        y: {
          formatter: (val: string) => {
            return val + '%';
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetX: 10
      }
    };

    return {
      chartOptions,
      series
    };
  }
});
</script>

<style scoped lang="scss">
.time-allocation-chart {
  display: block;
  @include glass-container;
}
</style>