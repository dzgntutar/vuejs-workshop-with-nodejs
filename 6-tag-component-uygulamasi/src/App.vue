<template>
  <div class="container">
    <app-tags v-model="tags" color="success" />
    <app-tags v-model="tags2" color="danger" />
    <app-tags v-model="tags2" color="info" />
    <app-tags v-model="tags2" color="primary" />
    <app-tags v-model="tags2" color="warning" />
    <app-tags v-model="tags2" color="secondary" />
  </div>
</template>
<script>
import Tags from "./components/Tags";
export default {
  components: {
    appTags: Tags,
  },
  data() {
    return {
      tags: "aaa,bbb,ccc,dddd",
      tags2: "Boş",
    };
  },
};
</script>
<style>
body {
  font-family: sans-serif;
}
</style>
