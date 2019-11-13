import { Module } from "vuex";
import RootState from "@vue-storefront/core/types/RootState";
import DealersState from "../types/DealersState";
import fetch from "isomorphic-fetch";
import { Logger } from "@vue-storefront/core/lib/logger";
//import { processURLAddress } from "@vue-storefront/core/helpers";

const getters = {
  getDealers: state => () => {
    console.log('getDealers', state);
    return state.dealers.dealers;
  }
};

const actions = {
  loadDealers(context, { url }) {
    //const apiUrl = processURLAddress(url);
    const apiUrl = 'http://localhost:8080/api/ext/dealers/getDealers'; // @todo
    fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          context.commit('setDealers', data.result);
        }
      })
      .catch(err => {
        Logger.log(err)();
        Logger.error(
          "Did you make sure the Yireo_ExampleDealers are installed?"
        )();
      });
  }
};

const mutations = {
  setDealers(state, data) {
    state.dealers = data.dealers.items;
  }
};

export const module: Module<DealersState, RootState> = {
  namespaced: true,
  getters,
  actions,
  mutations
};
