<template>
  <div class="container">
    <div class="body">
      <div class="col-md-6 offset-md-3">
        <app-todo-form></app-todo-form>
      </div>
    </div>
  </div>
</template>

<script>
import todoForm from "../todo/todoForm";
export default {
  //name: "homeView",
  components: { appTodoForm: todoForm },
};
</script>

<style scoped>
.body {
  margin-top: 20px;
}
</style>
