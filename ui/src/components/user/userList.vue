<template>
  <div id="content1">
    <h2>child 1</h2>
    <h3>User List</h3>
    <p>Parent Count : {{ parentCount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    parentCount: {
      // prop validation
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
#content1 {
  padding: 10px;
  background-color: bisque;
  display: block;
}
</style>
