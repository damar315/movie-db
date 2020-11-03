import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      movieList: {},
      isSearching: false,
    },
    mutations: {
      addMovies(state, movie) { 
        state.movieList = movie;
      },
      searchMovie(state, searchRes) {
        state.movieList = searchRes;
        state.isSearching = true;
      }
    },
    actions: {
          fetchMovie({commit}, payload) { 
          if(payload) {
            axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=5592acc82e9c39c037907dfb73086421&language=en-US&page=${payload}`)
            .then(movieData => {
              commit('addMovies', movieData.data)})
            .catch(er => console.log(er))
          } else {
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=5592acc82e9c39c037907dfb73086421&language=en-US')
                .then(movieData => {
                  commit('addMovies', movieData.data)})
                .catch(er => console.log(er))
          } 
        },
        
        searchMovie({commit}, payload) {
          const modifiedPayload = payload.split(' ').join('%20');
          console.log(modifiedPayload);
          if(payload === '') {
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=5592acc82e9c39c037907dfb73086421&language=en-US&page=1')
                .then(movieData => {
                  commit('addMovies', movieData.data)})
                .catch(er => console.log(er))
          } else {
            axios(`https://api.themoviedb.org/3/search/movie?api_key=5592acc82e9c39c037907dfb73086421&language=en-US&query=${modifiedPayload}&page=1&include_adult=true`)
          .then(res => commit('searchMovie', res.data))
          .catch(er => console.log(er))
          }
          
          
        }
    }
  })

 export default store