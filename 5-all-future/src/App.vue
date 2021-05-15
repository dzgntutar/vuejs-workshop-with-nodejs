<template>
  <div class="">
    <app-header></app-header>
    <app-product-purchase></app-product-purchase>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ProductPurchase from "./components/products/ProductPurchase";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appProductPurchase: ProductPurchase,
  },
};
</script>

<style>
</style>
