<template>
  <div class="title">
    <h1>{{ store.getters.title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Title',
  setup() {
    const store = useStore();
    return { store };
  },
});
</script>

<style scoped>
  .title {
    @apply font-bold text-center container mx-auto my-10 w-80 h-10 text-green-400 text-5xl;
  }
</style>
