import Vue from "vue";
import { router } from "../../router";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductWithId(state) {
    return (id) =>
      state.products.find((p) => {
        return p.id == id;
      });
  },
};

//senkron*****************************
const mutations = {
  addProductToList(state, product) {
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
          commit("addProductToList", data[key]);
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
        commit("addProductToList", product);

        let footerInfo = {
          purchase: product.price,
          sale: 0,
          count: product.count,
        };
        dispatch("setFooterInfos", footerInfo);

        router.replace("/");
      });
  },
  sellProduct({ state }, payload) {
    let product = state.products.find((p) => {
      return p.id == payload.id;
    });

    if (product) {
      let diffrence = product.count - payload.sellCount;

      Vue.http
        .patch(
          "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products/" +
            payload.id +
            ".json",
          { count: diffrence }
        )
        .then((response) => {
          product.count = diffrence;
          console.log(response);
        });
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
