<template>
	<q-card class="q-pa-md card" flat>
		<div class="card__title">{{ title }}</div>
		<div class="card__value">{{ formattedValue }}</div>
		<div
			class="card__icon items-center justify-center"
		>
			<q-icon
				size='24px'
				:name="`img:/icons/${icon}.svg`" />
		</div>
	</q-card>
</template>

<script setup lang="ts">
import { formatNumber } from 'src/utils'
import { computed } from 'vue'

export interface CardProps {
  title: string
  value: number
  icon: string
  color: string
}

const props = defineProps<CardProps>()

const formattedValue = computed(() => {
  return formatNumber(props.value)
})
</script>

<style scoped lang="scss">
.card {
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px 0 #f9fafb;
  background: #fff;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 56px;
  @media screen and (max-width: $breakpoint-xs-max) {
    grid-template-columns: 1fr;
    padding: 14px 16px;
    width: 47%;
  }
  @media screen and (max-width: $breakpoint-sm-max) and (min-width: $breakpoint-xs-max) {
    width: 100%;
  }
  &__title {
    font-size: 14px;
    line-height: 20px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    color: var(--q-text-secondary);
    @media screen and (max-width: $breakpoint-xs-max) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
  &__value {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    grid-column: 1/2;
    grid-row: 2/3;
    color: var(--q-text-dark);
    @media screen and (max-width: $breakpoint-xs-max) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
  }
  &__icon {
    grid-column: 2/3;
    grid-row: 1/3;
    justify-self: end;
    align-self: center;
    width: 100%;
    height: 100%;
    border-radius: 50% !important;
    display: flex;
    background: v-bind('props.color');
    @media screen and (max-width: $breakpoint-xs-max) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      width: 24px;
      justify-self: start;
      background: none;
      padding-bottom: 8px;
    }
  }
}
</style>
