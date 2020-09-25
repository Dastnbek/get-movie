import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newMovies: [],
    popularMovies: [],
    topMovies: []
  },
  mutations: {
    mutateNewMovies(state, newMovies){
        state.newMovies = newMovies;
    },
    mutatePopularMovies(state, popularMovies){
        state.popularMovies = popularMovies;
    }
  },
  actions: {
    addNewMovies({commit}, movies){
        commit('mutateNewMovies', movies)
    },
    addPopularMovies({commit}, movies){
        commit('mutatePopularMovies', movies)
    }
  },
  modules: {
  }
})
