import Vue from "vue";

export const setFooterInfos = ({ state, commit }, FooterInfo) => {
  /* Uygulama içindeki datayı güncelle */
  commit("updateFooterInfos", FooterInfo);

  /* DB yi güncelle */
  let result = {
    purchase: state.purchase,
    sell: state.sale,
  };
  Vue.http
    .put(
      "https://vuejs-product-app-3e64f-default-rtdb.firebaseio.com/trade-result.json",
      result
    )
    .then((response) => {
      console.log(response);
    });
};

export const getFooterInfos = ({ commit }) => {
  console.log(commit);
};
