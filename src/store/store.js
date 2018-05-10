import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态管理
export default new Vuex.Store({
  state: {
    count: '',
    listPagePars: new Map()
  },
  mutations: {
    SAVE_LIST_PAGE_PARS: (state, { path, pars }) => {
      state.listPagePars.set(path, pars)
    }
  },
  actions: {
    save_list_page_pars ({commit}, { path, pars }) {
      commit('SAVE_LIST_PAGE_PARS', { path, pars })
    }
  }
})
