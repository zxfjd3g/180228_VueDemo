<template>
  <mt-button type="primary" @click.native="handleClick">测试mint-ui组件库</mt-button>
</template>

<script>

  import {Toast} from 'mint-ui'

  export default { // 配置对象

    methods: {
      handleClick () {
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>