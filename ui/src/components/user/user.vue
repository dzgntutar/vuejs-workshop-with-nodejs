<template>
  <div class="container">
    <div class="row">
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
import UserList from "./userList";
export default {
  components: { userList: UserList },
};
</script>
