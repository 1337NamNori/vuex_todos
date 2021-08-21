<template>
	<div
		class="
			px-12
			py-6
			flex
			justify-between
			items-center
			border-b border-gray-300
		"
	>
		<div class="text-left">
			<p class="text-2xl text-blue-500">
				<b>{{ getDayOfWeek }}</b
				>, {{ getDateOfMonth }}
			</p>
			<p class="text-gray-400">{{ getMonthOfYear }}</p>
		</div>
		<div class="text-gray-600 text-right">
			<div>
				<b>{{ todosCount }}</b> tasks
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: mapGetters([
		"todosCount",
		"getDayOfWeek",
		"getMonthOfYear",
		"getDateOfMonth",
	]),
};
</script>

<style>
</style>