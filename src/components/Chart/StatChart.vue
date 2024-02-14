<template>
	<q-card class="chart" flat>
		<VChart
			:loading="isLoading"
			class="chart__graph"
			autoresize
			:option="bar"
		/>
	</q-card>
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { provide, computed } from 'vue'

import { formatNumber } from 'src/utils'

use([TitleComponent, TooltipComponent, LegendComponent, GridComponent, LineChart, SVGRenderer])

provide(THEME_KEY, 'light')

export type Props = {
  chartData: ACCOUNT.ChartDay
  isLoading: boolean
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  interval: 4
})

const bar = computed(() => {
  return {
    title: {
      show: false,
      text: 'Продажи по дням',
      left: 'left',
      textStyle: {
        color: 'var(--q-dark)',
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: props.chartData.date,
      offset: 10,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: props.interval,
        color: 'var(--q-grey)'
      }
    },
    yAxis: {
      type: 'value',
      offset: 10,
      axisLabel: {
        color: 'var(--q-grey)',
        formatter: (value: number) => {
          return formatNumber(value)
        }
      }
    },
    series: [
      {
        data: props.chartData.data,
        type: 'line',
        symbol: 'none',
        itemStyle: {
          color: 'var(--q-secondary-2)'
        },
        lineStyle: {
          width: 1
        },
        areaStyle: {
          color: 'var(--q-secondary-3)'
        }
      }
    ]
  }
})
</script>

<style scoped lang='scss'>
.chart {
  height: 440px;
  padding: 24px 24px 0 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 #f9fafb;
  @media screen and (max-width: $breakpoint-xs-max) {
    padding: 0;
  }
}
</style>
