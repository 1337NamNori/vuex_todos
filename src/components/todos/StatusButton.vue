<template>
	<button
		class="px-2 py-1 mb-1 mx-1 text-sm capitalize rounded-full"
		:class="{
			'bg-blue-500 text-white border-0 border-transparent shadow-lg':
				currentStatus === status,
			'text-gray-600 hover:text-gray-900': currentStatus !== status,
		}"
		@click="setStatus(status)"
	>
		{{ status }}
	</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	computed: mapState(["currentStatus"]),
	methods: mapMutations(["setStatus"]),
	props: ["status"],
};
</script>

<style>
</style>