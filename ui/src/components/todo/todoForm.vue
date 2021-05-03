<template>
  <div class="row">
    <form>
      <div class="form-group row">
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
      <div class="form-group row">
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
    </form>
  </div>
</template>

<script>
export default {};
</script>
