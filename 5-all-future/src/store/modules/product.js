import Vue from "vue";

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
  addProduct(state, product) {
    state.products.push(product);
  },
};

//async
const actions = {
  //initApp({}) {},

  addProduct({ commit }, payload) {
    Vue.http
      .post(
        "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products.json",
        payload
      )
      .then((response) => {
        console.log(response);
        console.log(commit);
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
