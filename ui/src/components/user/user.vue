<template>
  <div class="container">
    <div class="row">
      <div><user-list></user-list></div>
      <div><user-detail></user-detail></div>
    </div>
  </div>
</template>

<script>
import UserList from "./userList";
import UserDetail from "./userDetail";

export default {
  components: {
    userList: UserList,
    userDetail: UserDetail,
  },
};
</script>
