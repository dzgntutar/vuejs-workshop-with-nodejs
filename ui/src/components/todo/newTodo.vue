<template>
  <form>
    <h2 class="text-center">Add Todo</h2>
    <div class="form-group">
      <label class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        <input type="text" v-model="todo.title" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 col-form-label">Description</label>
      <div class="col-sm-10">
        <textarea
          cols="10"
          rows="3"
          class="form-control"
          v-model="todo.description"
        ></textarea>
      </div>
    </div>
    <br />
    <button
      type="submit"
      class="btn btn-primary btn-sm"
      @click.prevent="SaveTodo()"
    >
      Save
    </button>
  </form>
</template>

<script>
const { uid } = require("uid");

export default {
  data: () => {
    return {
      todo: {
        id: null,
        title: null,
        description: null,
      },
    };
  },
  methods: {
    SaveTodo() {
      this.todo.id = uid();
      this.emitter.emit("newTodoAdded", this.todo);
    },
  },
};
</script>
