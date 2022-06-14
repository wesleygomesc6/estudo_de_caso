import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    permissao: null
  },
  mutations: {
    USUARIO_LOGADO (state, {user, permissao}) {
      state.user = user
      state.permissao = permissao
    },
    USUAIRO_DESLOGADO (state) {
      state.user = null,
      state.permissao = null
    }
  },
  actions: {
  },
  modules: {
  }
})
