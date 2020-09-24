import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newMovies : []
  },
  mutations: {
    mutateNewMovies(state, newMovies){
        state.newMovies = newMovies;
    }
  },
  actions: {
    addNewMovies({commit}, movies){
        commit('mutateNewMovies', movies)
    }
  },
  modules: {
  }
})
