import axios from 'axios';
import { createStore } from 'vuex';
import ToDo from '@/types/ToDo';

export type State = { toDoList: ToDo[], nextId: number, title: string }

const state: State = { toDoList: [], nextId: 0, title: 'To-Do List' };

export const store = createStore({
  state,
  mutations: {
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    addToDo(state: State, toDo: ToDo) {
      state.toDoList.push(toDo);
      state.nextId += 1;
    },
    setMessage(state: State, title: string) {
      state.title = title;
    },
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit('addToDo', toDo);
    },
    getTitle({ commit }, status) {
      /* eslint-disable-next-line */
      axios.get('http://localhost:5000/' + status).then((response) => {
        commit('setMessage', JSON.parse(JSON.stringify(response.data)).message);
      });
    },
  },
  getters: {
    /* eslint no-shadow: ["error", { "allow": ["state"] }] */
    toDoList(state: State) {
      return state.toDoList;
    },
    title(state: State) {
      return state.title;
    },
  },
});
