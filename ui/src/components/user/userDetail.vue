<template>
  <div id="content2">
    <h2>child 2</h2>
    <h3>User Detail</h3>
    <p>Child 1 Name : {{ child1Name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    child1Name: {
      type: String,
    },
  },
};
</script>

<style scoped >
#content2 {
  padding: 10px;
  background-color: burlywood;
  display: block;
}
</style>
