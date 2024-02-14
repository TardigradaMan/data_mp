<template>
	<q-layout view="lHh LpR fff">
		<q-header
			elevated
			class="q-pa-md"
			:class="isMobileDrawer ? 'bg-primary' : 'bg-white'"
		>
			<q-toolbar>
				<template v-if="isMobileDrawer">
					<q-btn
						flat
						dense
						round
						icon="menu"
						aria-label="Menu"
						@click="toggleLeftDrawer"
					/>

					<q-toolbar-title>
						<q-icon class='logo' name="img:/icons/logo_desktop.svg" />
					</q-toolbar-title>
				</template>
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			class="bg-primary absolute-top q-pa-md"
			showIfAbove
			bordered
		>
			<q-icon
				v-if='!isMobileDrawer'
				class='logo'
				name="img:/icons/logo_desktop.svg"
			/>
		</q-drawer>

		<q-page-container class="bg-info">
			<h1 class="text-h4 q-pl-lg">{{ title }}</h1>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

defineProps<{
  title?: string
}>()

const leftDrawerOpen = ref(false)
const $q = useQuasar()

const isMobileDrawer = computed(() => {
  return $q.screen.xs || $q.screen.sm
})

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped lang='scss'>
.logo {
  width: 150px;
  height: 50px;
  @media screen  and (max-width: $breakpoint-sm-max) {
    width: 126px;
    height: 40px;

  }
}
</style>
