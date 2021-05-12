<template>
  <div class="body">
    <div class="col-md-6 offset-md-3">
      <app-todo-form></app-todo-form>
      <hr />
      <app-todo-list></app-todo-list>
    </div>
  </div>
</template>

<script>
import todoForm from "../todo/newTodo";
import todoList from "../todo/todos";

export default {
  //name: "homeView",
  components: { appTodoForm: todoForm, appTodoList: todoList },
};
</script>

<style scoped>
.body {
  margin-top: 20px;
}
</style>
