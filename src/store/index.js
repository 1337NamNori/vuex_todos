import Vue from 'vue'
import Vuex from 'vuex'
import storage from './storage/storage.js';
import date from './modules/date.js';

Vue.use(Vuex)

function clear(state) {
  state.currentId = '';
  state.currentTitle = '';
  state.isDeleteModalShow = false;
  state.isEditModalShow = false;
}

export default new Vuex.Store({
  state: {
    todos: [],
    statuses: ['pending', 'done', 'all'],
    currentStatus: 'all',
    isDeleteModalShow: false,
    isEditModalShow: false,
    currentId: '',
    currentTitle: '',
  },
  getters: {
    todosCount(state) {
      return state.todos.length;
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.completed).length;
    },
    progress(state, getters) {
      if (getters.doneTodosCount === 0) return 0;
      return Math.ceil(getters.doneTodosCount / getters.todosCount * 100);
    },
    isShowTodo(state) {
      return function (completed) {
        if (state.currentStatus === 'all') {
          return true;
        }
        if (state.currentStatus === 'pending') {
          return !completed;
        }
        if (state.currentStatus === 'done') {
          return completed;
        }
      }
    },
  },
  mutations: {
    getTodos(state) {
      const todos = storage.get();
      state.todos = todos;
    },
    toggleTodo(state, todoId) {
      state.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
      })
      storage.set(state.todos);
    },
    setCurrentTitle(state, title) {
      state.currentTitle = title;
    },
    setStatus(state, status) {
      state.currentStatus = status;
    },
    createTodo(state, todo) {
      state.todos.unshift(todo);
      storage.set(state.todos);
    },
    updateTodo(state) {
      state.todos.forEach((todo) => {
        if (todo.id === state.currentId) {
          todo.title = state.currentTitle;
        }
      })
      storage.set(state.todos);
      clear(state);
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
      storage.set(state.todos);
      clear(state);
    },
    showDeleteModal(state, todoId) {
      state.currentId = todoId;
      state.isDeleteModalShow = true;
    },
    hideDeleteModal(state) {
      state.isDeleteModalShow = false;
    },
    showEditModal(state, todoId) {
      state.currentId = todoId;
      state.currentTitle = state.todos.find(todo => todo.id === state.currentId).title;
      state.isEditModalShow = true;
    },
    hideEditModal(state) {
      state.isEditModalShow = false;
    }
  },
  actions: {
    getTodos({ commit }) {
      commit('getTodos');
    },
    createTodo({ commit }, todo) {
      commit('createTodo', todo);
    },
    updateTodo({ commit }) {
      commit('updateTodo');
    },
    deleteTodo({ commit }, todoId) {
      commit('deleteTodo', todoId);
    }
  },
  modules: {
    date,
  },
})
