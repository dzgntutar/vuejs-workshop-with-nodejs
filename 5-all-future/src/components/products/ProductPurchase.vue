<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 mb-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
              v-model="product.title"
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              v-model="product.count"
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
              v-model="product.price"
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
              v-model="product.description"
            ></textarea>
          </div>
          <hr />
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isDisabled"
            @click="saveProduct"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: 0,
        price: 0,
        description: "",
      },
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("addProduct", this.product);
    },
  },
  computed: {
    isDisabled() {
      return (
        this.product.title.length <= 0 ||
        this.product.count <= 0 ||
        this.product.price <= 0 ||
        this.product.description.length <= 0
      );
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.product.title.length > 0 ||
      this.product.count > 0 ||
      this.product.price > 0 ||
      this.product.description.length > 0
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklkleriniz var! Çıkış yapmak istediğine emin misin?"
        )
      )
        next();
      else next(false);
    } else next();
  },
};
</script>
