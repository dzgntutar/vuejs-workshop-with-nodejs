<template>
  <div id="content" class="container border border-primary">
    <div class="row">
      <p>Parent Component Count : {{ count }}</p>
      <div>
        <button class="btn btn-primary" @click="arttir">Arttır</button>
        {{ "|" }}
        <button class="btn btn-primary" @click="azalt">Azalt</button>
      </div>
      <hr />
      <p>Child'dan gelecek değer : {{ childData }}</p>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <user-list
          :parentCount="count"
          @dataFromChild="childData = $event"
        ></user-list>
      </div>
      <div class="col-md-6">
        <user-detail :child1Name="childData"></user-detail>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "./userList";
import UserDetail from "./userDetail";

export default {
  data: function () {
    return {
      count: 0,
      childData: "Ali",
    };
  },
  methods: {
    arttir: function () {
      this.count++;
    },
    azalt: function () {
      this.count--;
    },
  },
  components: {
    userList: UserList,
    userDetail: UserDetail,
  },
};
</script>

<style scoped>
#content {
  padding: 30px;
  background-color: aqua;
}
</style>
