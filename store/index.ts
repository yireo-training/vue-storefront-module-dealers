import { Module } from "vuex";
import RootState from "@vue-storefront/core/types/RootState";
import DealersState from "../types/DealersState";
import fetch from "isomorphic-fetch";
import { Logger } from "@vue-storefront/core/lib/logger";
import { processURLAddress } from "@vue-storefront/core/helpers";

const state = {
  items: []
};

const getters = {
  getDealers: state => {
    return state.dealers.dealers;
  },
  getLoading: state => {
    return state.dealers.loading;
  }
};

const actions = {
  loadDealers(context) {
    context.commit('setLoading', true);
    const apiUrl = processURLAddress('/api/ext/dealers/getDealers');
    return fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          context.commit('setDealers', data.result.dealers.items);
          context.commit('setLoading', false);
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
  setDealers(state, dealers) {
    state.items = dealers;
  },
  setLoading(state, loading) {
    state.loading = loading;
  }
};

export const module: Module<DealersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
