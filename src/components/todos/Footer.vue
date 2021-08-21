<template>
	<div
		class="
			px-6
			py-3
			border-t border-gray-300
			flex
			justify-between
			items-center
		"
	>
		<div>
			<b>Progress: </b>
			{{ doneTodosCount }}/{{ todosCount }} ({{ progress }}%)
		</div>
		<div>
			<StatusButton v-for="status in statuses" :key="status" :status="status" />
		</div>
	</div>
</template>

<script>
import StatusButton from "./StatusButton.vue";
import { mapGetters, mapState } from "vuex";

export default {
	computed: {...mapGetters(["doneTodosCount", "todosCount", "progress"]),...mapState(["statuses"])},
	components: { StatusButton },
	props: ["status"],
	data() {
		return {
			text: this.status,
		};
	},
};
</script>

<style>
</style>