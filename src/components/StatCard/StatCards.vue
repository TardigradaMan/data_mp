<template>
	<div class='cards row justify-between justify-sm-around'>
		<stat-card v-for='card in cardsMock'
			:key='card.title'
			:color='card.color'
			:icon='card.icon'
			:title='card.title'
			:value='card.value'
			class='col-xs-1 col-sm-1 col-md'/>
	</div>
</template>

<script setup lang='ts'>
import StatCard, { CardProps } from 'components/StatCard/StatCard.vue'

defineOptions({
  inheritAttrs: false
})


const cardsMock:Array<CardProps>= [
  {title: 'Товаров', value: 14360601, icon: 'shopping-cart', color: 'var(--q-secondary-4)'},
  {title: 'Каталогов', value: 3069, icon: 'bx_category-alt', color: 'var(--q-positive-2)'},
  {title: 'Брендов', value: 352335, icon: 'bx_star', color: 'var(--q-warning-2)'},
  {title: 'Продавцов', value: 47246, icon: 'bx_store-alt', color: 'var(--q-negative-2)'},
]
</script>

<style scoped lang='scss'>
.cards {
  gap: 24px;
  width: 100%;
  @media screen and (max-width: $breakpoint-xs-max) {
    gap: 16px;
  }
}
</style>
