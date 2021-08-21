<template>
	<ul>
		<li
			v-for="todo in todos"
			:key="todo.id"
			class="
				px-6
				py-3
				border-t border-gray-300
				text-lg text-left
				flex
				items-center
				justify-between
			"
			v-show="isShowTodo(todo.completed)"
		>
			<div
				:class="{
					'line-through text-gray-400': todo.completed,
					'text-gray-600': !todo.completed,
				}"
			>
				<input
					type="checkbox"
					name=""
					id=""
					class="
						mr-3
						rounded
						border-gray-300
						text-blue-500
						shadow-sm
						focus:border-0
						focus:ring-blue-200 focus:ring-0
					"
					:checked="todo.completed"
					@change="toggleTodo(todo.id)"
				/>
				{{ todo.title }}
			</div>
			<div>
				<button
					class="
						py-1
						px-2
						text-sm
						rounded-full
						text-blue-500
						hover:text-blue-700
					"
					@click="showEditModal(todo.id)"
				>
					Edit
				</button>
				<button
					class="
						py-1
						px-2
						text-sm
						rounded-full
						text-red-500
						hover:text-red-700
					"
					@click="showDeleteModal(todo.id)"
				>
					Delete
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
	computed: { ...mapState(["todos"]), ...mapGetters(["isShowTodo"]) },
	methods: { ...mapMutations(["toggleTodo", "showDeleteModal", "showEditModal"]) },
};
</script>

<style>
</style>