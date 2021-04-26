<template>
  <div class="time-allocation-chart">
    <h5 class="time-allocation-chart__title">Verteilung</h5>
    <div class="time-allocation-chart__scrollbox">
      <apexchart
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { DateHelper } from '@/helpers/DateHelper';
import { ColorHelper } from '@/helpers/ColorHelper';
import { defineComponent } from 'vue';
import { vacationMonths, vacationYear } from '@/data/data';

const dateHelper = new DateHelper();
const colorHelper = new ColorHelper();

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
        stackType: '100%',
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      colors: [
        colorHelper.getColor('--highlight-four'),
        colorHelper.getColor('--highlight-one'),
        colorHelper.getColor('--highlight-two')
      ],
      toolbar: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        categories: vacationMonths.map(month => dateHelper.getMonthName(month)),
        lines: {
          show: false
        }
      },
      grid: {
        borderColor: colorHelper.getColor('--border-color'),
        yaxis: {
          lines: {
            show: false
          }
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
      },
      annotations: {
        xaxis: [
          {
            y: 0,
            strokeDashArray: 0,
            borderColor: colorHelper.getColor('--border-color'),
            borderWidth: 1,
            opacity: 1
          }
        ],
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

  &__scrollbox {
    overflow: hidden;
  }
}
</style>