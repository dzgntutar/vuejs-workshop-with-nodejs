import Vue from "vue";
import { router } from "../../router";

const state = {
  products: [],
};

const getters = {
  getProducst(state) {
    return state.products;
  },
  getProduct() {},
};

//senkron
const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

//async
const actions = {
  initApp({ state }) {
    Vue.http
      .get(
        "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        if (response.body) {
          // response.body.forEach((product) => {
          //   commit("updateProductList", product);
          // });
        }
        console.log(state.products);
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
