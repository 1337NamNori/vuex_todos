<template>
	<div class="mt-10 px-2 flex justify-center">
		<div
			class="
				w-full
				md:w-2/3
				lg:w-1/2
				bg-white
				rounded-xl
				flex flex-col
				justify-center
				border border-gray-400
				shadow-2xl
			"
		>
			<Header />
			<Input />
			<Tasks />
			<Footer />
		</div>
		<DeleteModal v-show="isDeleteModalShow" />
		<EditModal v-show="isEditModalShow" />
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "../components/todos/Header.vue";
import Footer from "../components/todos/Footer.vue";
import Input from "../components/todos/Input.vue";
import Tasks from "../components/todos/Tasks.vue";
import DeleteModal from "../components/todos/DeleteModal.vue";
import EditModal from "../components/todos/EditModal.vue";

export default {
	name: "Todos",
	components: {
		Header,
		Footer,
		Input,
		Tasks,
		DeleteModal,
		EditModal,
	},
	computed: mapState(["isDeleteModalShow", "isEditModalShow"]),
	methods: mapActions(["getTodos"]),
	created() {
		this.getTodos();
	},
};
</script>

<style>
</style>