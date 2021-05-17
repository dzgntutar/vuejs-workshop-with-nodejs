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
  updateProductList(state, product) {
    state.products.push(product);
  },
};

//async
const actions = {
  initApp() {
    Vue.http
      .get(
        "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        console.log(response);
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
