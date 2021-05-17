export const setFooterInfosFirsLoadFromDb = (state, payload) => {
  if (payload) {
    state.purchase += payload.purchase && parseFloat(payload.purchase);
    state.sale += payload.sale && parseFloat(payload.sale);
  }
  state.balance = parseFloat(state.sale - state.purchase);
};

export const updateFooterInfos = (state, payload) => {
  if (payload) {
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
    state.sale += parseFloat(payload.sale) * parseInt(payload.count);
  }
  state.balance = parseFloat(state.sale - state.purchase);
};
