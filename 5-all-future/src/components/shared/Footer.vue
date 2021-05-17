<template>
  <nav
    class="navbar fixed-bottom navbar-light"
    style="background-color: #e3f2fd"
  >
    <span class="navbar-text mr-auto"> <strong>vuejs</strong> | dutar </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Alış Tutarı : </strong>
      <span class="badge badge-danger">{{
        getFooterInfos.purchase | paraformat
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Satış Tutarı : </strong>
      <span class="badge badge-success">{{
        getFooterInfos.sale | paraformat
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Bakiye : </strong>
      <span class="badge badge-primary">{{
        getFooterInfos.balance | paraformat
      }}</span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getFooterInfos"]),
};
</script>