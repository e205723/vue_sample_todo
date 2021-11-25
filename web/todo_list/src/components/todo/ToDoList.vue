<template>
  <div class="to-do-list">
    <div class="add">
      <div class="add-column">
        <div class="attribute-name">
          <p>Title</p>
        </div>
        <div class="small-column">
          <input v-model="toDoTitle" class="to-do-title-input">
        </div>
      </div>
      <div class="add-column">
        <div class="attribute-name">
          <p>Status</p>
        </div>
        <div class="small-column">
          <button v-on:click='activateDoing' v-bind:class="{'selected': doing, 'unselected': done}">
            Doing
           </button>
          <button v-on:click='activateDone' v-bind:class="{'selected': done, 'unselected': doing}">
            Done
          </button>
        </div>
      </div>
      <div class="add-column">
        <button v-on:click='addToDo' class="add-button">Add</button>
      </div>
    </div>
  </div>
  <div ref="list" class="list">
    <div v-for="todo in store.getters.toDoList" :key="todo.id">
      <div class="to-do">
        <div class="column">
          <div class="to-do-title">
            <p> {{ todo.title }} </p>
          </div>
          <div class="to-do-status">
            <p v-if=todo.doing>Doing</p>
            <p v-if=todo.done>Done</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onUpdated, nextTick,
} from 'vue';
import { useStore } from 'vuex';
import ToDo from '@/types/ToDo';

export default defineComponent({
  name: 'ToDoList',
  setup() {
    const store = useStore();
    const toDoTitle = ref<string>('');
    const doing = ref<boolean>(true);
    const done = ref<boolean>(false);
    const list = ref<HTMLImageElement>();

    const activateDoing = () => {
      doing.value = true;
      done.value = false;
    };
    const activateDone = () => {
      doing.value = false;
      done.value = true;
    };
    const addToDo = () => {
      const toDo: ToDo = {
        id: store.state.nextId,
        title: toDoTitle.value,
        doing: doing.value,
        done: done.value,
      };
      store.commit('addToDo', toDo);
      toDoTitle.value = '';
      if (doing.value) {
        store.dispatch('getTitle', 'doing');
      } else if (done.value) {
        store.dispatch('getTitle', 'done');
      }
    };

    onUpdated(() => {
      nextTick(() => {
        if (!list.value) return;
        list.value.scrollTop = list.value.scrollHeight;
      });
    });

    return {
      store, toDoTitle, doing, done, activateDoing, activateDone, addToDo, list,
    };
  },
});
</script>

<style scoped>
  .add {
    @apply bg-gray-500 container mx-auto rounded-xl my-10 w-96 h-48;
  }
  .add-column{
    @apply flex items-center justify-around w-full h-16;
  }
  .column{
    @apply flex items-center justify-around w-full h-full;
  }
  .attribute-name{
    @apply font-light text-gray-100 text-center text-2xl bg-gray-900 rounded-xl w-24 h-8;
  }
  .small-column{
    @apply flex items-center justify-between w-48 h-8;
  }
  .to-do-title-input{
    @apply text-center bg-gray-100 rounded-xl w-full h-full;
  }
  .unselected{
    @apply font-light text-gray-300 bg-gray-100 rounded-xl w-20 h-full;
  }
  .selected{
    @apply font-light text-gray-900 bg-gray-100 rounded-xl w-20 h-full;
  }
  .add-button{
    @apply font-light text-gray-100 text-center text-2xl bg-gray-900 rounded-xl w-24 h-10;
  }
  .list {
    @apply overflow-auto container mx-auto rounded-xl my-10 w-96 h-96;
  }
  .to-do {
    @apply bg-gray-500 rounded-xl my-2 w-full h-16;
  }
  .to-do-title{
    @apply font-light text-gray-100 text-center leading-10
           text-2xl bg-gray-900 rounded-xl w-48 h-10;
  }
  .to-do-status{
    @apply font-light text-gray-900 leading-8 bg-gray-100 rounded-xl w-20 h-8;
  }
</style>
