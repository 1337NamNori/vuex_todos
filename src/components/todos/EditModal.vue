<template>
	<div class="inset-0 absolute bg-gray-900 bg-opacity-50 z-10">
		<div
			class="w-full h-full flex items-center justify-center"
			@click.self="hideEditModal()"
		>
			<div class="w-96 rounded-lg bg-white shadow-2xl">
				<div
					class="
						px-12
						py-12
						text-xl
						font-bold
						border-b border-gray-300
						flex
						justify-center
					"
				>
					<input
						type="text"
						class="p-0 w-full border-0 border-b border-gray-800 focus:border-0 focus:outline-none focus:ring-0"
						v-model="currentTitle"
						@keyup.enter="updateTodo()"
						@keyup.esc="hideEditModal()"
					/>
				</div>
				<div class="flex">
					<button
						class="
							w-1/2
							py-3
							border-r border-gray-300
							text-blue-500
							hover:text-blue-700
						"
						@click="updateTodo()"
					>
						Save
					</button>
					<button
						class="w-1/2 py-3 text-gray-600 hover:text-gray-800"
						@click="hideEditModal()"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
	computed: {
		...mapState(["currentId"]),
		currentTitle: {
			get() {
				return this.$store.state.currentTitle;
			},
			set(value) {
				this.setCurrentTitle(value);
			},
		},
	},
	methods: {
		...mapMutations(["hideEditModal", "setCurrentTitle"]),
		...mapActions(["updateTodo"]),
	},
};
</script>

<style>
</style>