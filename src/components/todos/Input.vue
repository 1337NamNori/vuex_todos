<template>
	<form @submit.prevent="onSubmit" class="px-6 py-3 flex justify-between">
		<input
			type="text"
			class="
				w-10/12
				p-0
				text-lg text-left text-gray-600
				border-0
				focus:border-0
				focus:ring-0
				focus:outline-none
			"
			placeholder="New todo..."
			v-model="title"
		/>
		<button
			type="submit"
			class="
				w-12
				h-12
				rounded-full
				bg-blue-500
				text-white text-2xl
				hover:bg-blue-600
				shadow-xl
			"
		>
			+
		</button>
	</form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
	data() {
		return {
			title: "",
		};
	},
	methods: {
		...mapActions(["createTodo"]),
		onSubmit: function () {
			if (this.title.trim() == "") return;

			this.createTodo({
				id: uuidv4(),
				title: this.title.trim(),
				completed: false,
			});
			this.title = "";
		},
	},
};
</script>

<style>
</style>