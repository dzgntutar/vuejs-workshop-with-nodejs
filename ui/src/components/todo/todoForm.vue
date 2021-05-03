<template>
  <form @submit.prevent="SaveTodo()">
    <div class="form-group">
      <label for="title" class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="description" class="col-sm-2 col-form-label"
        >Description</label
      >
      <div class="col-sm-10">
        <textarea
          id="description"
          cols="30"
          rows="10"
          class="form-control"
          placeholder="Description"
        ></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Sign in</button>
  </form>
</template>

<script>
export default {
  methods: {
    SaveTodo() {},
  },
};
</script>
