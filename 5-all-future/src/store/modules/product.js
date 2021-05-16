const state = {
  products: [],
};

const getters = {
  getProducst(state) {
    return state.products;
  },
  getProduct(state) {},
};

//senkron
const mutations = {
  addProduct(state, product) {
    state.products.push(product);
  },
};

//async
const actions = {
  initApp({ commit }) {},

  addProduct({ commit }, payload) {},
  sellProduct({ commit }, payload) {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
