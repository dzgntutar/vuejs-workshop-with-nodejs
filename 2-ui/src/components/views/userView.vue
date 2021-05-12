<template>
  <user-component></user-component>
</template>

<script>
import User from "../user/user";
export default {
  name: "userView",
  components: { userComponent: User },
};
</script>