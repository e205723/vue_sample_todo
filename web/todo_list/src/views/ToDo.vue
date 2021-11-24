<template>
  <div class="todo">
    <Title />
    <ToDoList @test="test" />
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
  methods: {
    test() {
      this.$nextTick(() => {
        alert('Hello, World!');
      });
    },
  },
};
</script>
