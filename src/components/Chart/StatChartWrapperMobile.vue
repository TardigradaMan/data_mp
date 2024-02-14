<template>
	<q-card flat class='q-pa-md'>
		<q-select borderless
			v-model="graphType"
			:options="options"
			class='select'
		>
			<template #selected-item="item">
				<span class='select__item'>Продажи по <span>{{ item.opt.label }}</span></span>
			</template>
		</q-select>
		<div><slot :type='graphType.value'/></div>
	</q-card>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'

defineSlots<{
  default(props: { type: 'profitByDay' | 'profitByMonth' }): never
}>()

const graphType = ref<ACCOUNT.MobileSelect>({ label: 'дням', value: 'profitByDay' })
const options = computed(() => {
  return [{ label: 'дням', value: 'profitByDay' }, { label: 'месяцам', value: 'profitByMonth' }]
})

</script>

<style scoped lang='scss'>
.select {
  max-width: 230px;
  & ::v-deep(.q-select__dropdown-icon) {
    color: var(--q-accent);
  }
  &__item {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    color: var(--q-dark);
    span {
      color: var(--q-accent);
    }
  }
}

</style>
