<template>
  <div>
    <h2 class="text-center">Todo List</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todoList" :key="todo.id">
          <td scope="row">{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.emitter.on("newTodoAdded", (todo) => {
      this.todoList.push({
        id: todo.id,
        title: todo.title,
        description: todo.description,
      });
    });
  },
  data() {
    return {
      todoList: [],
    };
  },
};
</script>
