<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productChanged"
            >
              <option disabled>Lütfen ürün seçiniz..</option>
              <option
                :disabled="product.count == 0"
                :value="product.id"
                v-for="product in getProducts"
                :key="product.id"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info"
                        >Stok : {{ product.count }}</span
                      >
                      <span class="badge badge-primary"
                        >Fiyat : {{ product.price | paraformat }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="number"
              class=""
              placeholder="Ürün adetini giriniz.."
              v-model="sellCount"
              :class="sellCountControl"
            />
          </div>
          <hr />
          <button class="btn btn-primary" @click="save">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: "",
      product: null,
      sellCount: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    sellCountControl: function () {
      return {
        "form-control bg-danger text-white":
          this.product?.count < this.sellCount,
        "form-control":
          this.product == null || this.product?.count >= this.sellCount,
      };
    },
  },
  methods: {
    productChanged() {
      this.product = this.$store.getters.getProductWithId(this.selectedProduct);
    },
    save() {
      let product = {
        id: this.selectedProduct,
        sellCount: this.sellCount,
      };

      this.$store.dispatch("sellProduct", product);
    },
  },
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>