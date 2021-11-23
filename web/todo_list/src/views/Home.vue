<template>
  <div class="home">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="head">
      <h1>Vueのチュートリアル</h1>
    </div>
    <div class="text">
      <p>
        Vueのディレクティブ、マスタッシュ構文、Vue-Router、Vuexなどの様々な機能を使っています。
      </p>
      <p>
        TypeScriptに対応した書き方で、CSSフレームワークにはTailWind CSSを使用しています。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
  .logo{
    @apply flex justify-center w-full;
  }
  .head{
    @apply font-light text-center text-gray-100 text-4xl;
  }
  .text{
    @apply font-light text-center text-gray-100;
  }
</style>
