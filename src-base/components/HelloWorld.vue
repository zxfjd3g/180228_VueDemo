<template>
  <div>
      <h2 class="title">{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'hello vue component'
      }
    }
  }
</script>

<style scoped>
  .title {
    color: red;
  }
</style>