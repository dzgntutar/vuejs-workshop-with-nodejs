<template>
  <div class="container">
    <div class="">
      <nav class="d-flex justify-content-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/user">User</router-link>
      </nav>
    </div>

    <div class=""><router-view /></div>

    <div class=""></div>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
};
</script>


<style>
</style>
