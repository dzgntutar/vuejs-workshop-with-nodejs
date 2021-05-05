<template>
  <form @submit.prevent="SaveTodo()">
    <h2 class="text-center">Add Todo</h2>
    <div class="form-group">
      <label for="title" class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="title" />
      </div>
    </div>
    <div class="form-group">
      <label for="description" class="col-sm-2 col-form-label"
        >Description</label
      >
      <div class="col-sm-10">
        <textarea
          id="description"
          cols="10"
          rows="3"
          class="form-control"
        ></textarea>
      </div>
    </div>
    <br />
    <button type="submit" class="btn btn-primary btn-sm">Save</button>
  </form>
</template>

<script>
export default {
  methods: {
    SaveTodo() {},
  },
};
</script>
