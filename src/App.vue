<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <List :todos="todos"/>
      <todo-footer/>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default { // 配置对象

    data () {
      return {
        todos: [
          {title: '吃饭', completed: false},
          {title: '睡觉', completed: true},
          {title: '打代码', completed: false}
        ]
      }
    },


    components: {
      TodoHeader:Header,
      List,
      TodoFooter: Footer
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