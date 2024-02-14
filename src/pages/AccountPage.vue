<template>
	<q-page class="row q-pa-lg items-start content-start account">
		<StatCards />

		<StartChartWrapper class="row col-12 justify-between" v-if="$q.screen.name !== 'xs'">
			<StatChart
				:chartData="store.profitByDay"
				:isLoading="store.isLoading.profitByDay"
				class="col-xs-12 col-md"
			/>
			<StatChart
				:chartData="store.profitByMonth"
				:isLoading="store.isLoading.profitByMonth"
				:interval="0"
				class="col-xs-12 col-md"
			/>
		</StartChartWrapper>
		<StatChartWrapperMobile v-else
			class="col-12"
			v-slot="{ type }: { type: 'profitByDay' | 'profitByMonth'}">
			<StatChart
				:chartData="store[type]"
				:isLoading="store.isLoading[type]"
				class="col"
			/>
		</StatChartWrapperMobile>
	</q-page>
</template>

<script setup lang="ts">
import { useChartsStore } from 'stores/charts'
import StatCards from 'components/StatCard/StatCards.vue'
import StatChart from 'components/Chart/StatChart.vue'
import StartChartWrapper from 'components/Chart/StartChartWrapper.vue'
import StatChartWrapperMobile from 'components/Chart/StatChartWrapperMobile.vue'

const store = useChartsStore()



const getChartsData = () => {
  Promise.allSettled([store.getProfitByDay(), store.getProfitByMonth()])
}
getChartsData()
</script>
<style scoped lang="scss">
.account {
  gap: 24px;
}
</style>
