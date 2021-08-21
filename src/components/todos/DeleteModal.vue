<template>
	<div class="inset-0 absolute bg-gray-900 bg-opacity-50 z-10">
		<div
			class="w-full h-full flex items-center justify-center"
			@click.self="hideDeleteModal()"
		>
			<div class="w-96 rounded-lg bg-white shadow-2xl">
				<div
					class="
						px-24
						py-12
						text-xl
						font-bold
						border-b border-gray-300
					"
				>
					Are you sure?
				</div>
				<div class="flex">
					<button
						class="
							w-1/2
							py-3
							border-r border-gray-300
							text-red-500
							hover:text-red-700
						"
						@click="deleteTodo(currentId)"
					>
						Delete
					</button>
					<button
						class="w-1/2 py-3 text-gray-600 hover:text-gray-800"
						@click="hideDeleteModal()"
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
	computed: mapState(["currentId"]),
	methods: {
		...mapMutations(["hideDeleteModal"]),
		...mapActions(["deleteTodo"]),
	},
};
</script>

<style>
</style>