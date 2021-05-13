<template>
  <div>
    <app-todo-form></app-todo-form>
    <hr />
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import todoForm from "../home/newTodo";
import todoList from "../home/todos";

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
