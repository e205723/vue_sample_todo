<template>
  <div class="todo">
    <Title />
    <ToDoList />
  </div>
</template>

<script>
import Title from '@/components/todo/Title.vue';
import ToDoList from '@/components/todo/ToDoList.vue';

export default {
  name: 'ToDo',
  components: {
    Title, ToDoList,
  },
};
</script>
