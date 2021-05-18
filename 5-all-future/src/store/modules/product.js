import Vue from "vue";
import { router } from "../../router";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct() {},
};

//senkron*****************************
const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

//async*******************************
const actions = {
  initApp({ commit }) {
    Vue.http
      .get(
        "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        let data = response.body;
        for (let key in data) {
          data[key].id = key;
          commit("updateProductList", data[key]);
        }
      });
  },

  addProduct({ dispatch, commit }, product) {
    Vue.http
      .post(
        "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products.json",
        product
      )
      .then((response) => {
        product.id = response.body.name;
        commit("updateProductList", product);

        let footerInfo = {
          purchase: product.price,
          sale: 0,
          count: product.count,
        };
        dispatch("setFooterInfos", footerInfo);

        router.replace("/");
      });
  },
  //sellProduct({}) {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
