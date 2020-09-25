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
    },
    mutateTopMovies(state, topMovies){
        state.topMovies = topMovies
    }
  },
  actions: {
    addNewMovies({commit}, movies){
        commit('mutateNewMovies', movies)
    },
    addPopularMovies({commit}, movies){
        commit('mutatePopularMovies', movies)
    },
    addTopMovies({commit}, movies){
        commit('mutateTopMovies', movies)
    }
  },
  modules: {
  }
})
