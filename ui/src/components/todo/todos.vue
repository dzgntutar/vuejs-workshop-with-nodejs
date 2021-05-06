<template>
  <h2 class="text-center">Todo List</h2>
</template>

<script>
export default {
  created() {
    this.emitter.on("newTodoAdded", function (todo) {
      console.log("todos", todo);
    });
  },
};
</script>
