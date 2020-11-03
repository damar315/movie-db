<template>
  <div id="app">
    <h1>My Personal Movie Database</h1>
    <div v-show="!isSearching" class="pages-control">
    <button :disabled="pageNum - 1 <= 0 ? true : false" @click="changePage(pageNum-1)">Prev Page</button><p>Page {{pageNum}}</p><button @click="changePage(pageNum+1)">Next Page</button>
    </div>
    <search-bar></search-bar>
    <the-movie></the-movie>
  </div>
</template>

<script>

import TheMovie from './components/TheMovie.vue'
import SearchBar from './components/SearchBar.vue'
export default {
  components: {
    SearchBar,
    TheMovie,
  },
  methods: {
      changePage(pageTo) {
      this.pageNum = pageTo;
      this.isSearching ? null : this.$store.dispatch('fetchMovie', this.pageNum)
    }
  },
  computed: {
      nowPlaying() {
        return this.$store.state.movieList
      },
      isSearching() {
        return this.$store.state.isSearching;
      }
    },
  data() {
    return {
      isShowing: false,
      pageNum: 1,
    }
  },
  
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);
body {
  margin: 0;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(245, 245, 245, 0.658);
  height: 100vh;
}
.pages-control {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

h1, button {
  text-align: center;
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
}
h1 {
  padding-top: 20px;
}
button {
     font-family: 'Roboto Condensed', sans-serif;
     font-weight: 600;
     padding: 10px;
     border: 1px solid transparent;
     border-radius: 25px;
     background-color: rgb(209, 66, 188);
     cursor: pointer;
     outline: none;
}
li {
  list-style: none;
}
.pages-control p {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
