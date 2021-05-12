<template>
  <div id="content1">
    <h2>child 1</h2>
    <h3>User List</h3>
    <p>Parent Count : {{ parentCount }}</p>
    <button @click="senToParent('Düzgün')">Parenta Düzgün Gönder</button>
    <button @click="senToParent('Ece')">Parenta Ece Gönder</button>
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
  methods: {
    senToParent(name) {
      this.$emit("dataFromChild", name);
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
