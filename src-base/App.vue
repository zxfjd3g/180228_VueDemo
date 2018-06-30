<template>
  <div>
    <img src="./assets/logo.png" alt="logo" class="logo">
    <HelloWorld/>
    <hello-world/>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default { // 配置对象
    components: {
      HelloWorld
    }
  }
</script>
<style>
  .logo {
    width: 300px;
    height: 300px;
  }
</style>