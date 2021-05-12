<template>
  <div class="container col-md-6 col-offset-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" tag="li"><a>Home</a> </router-link>
        <router-link to="/about" tag="li"><a>About</a></router-link>
        <router-link to="/user" tag="li"><a>User</a></router-link>
      </div>
    </nav>
    <div class=""><router-view /></div>
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
