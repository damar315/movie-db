<template>
    <form >
    <input class="searchbar" v-model="search" @keyup.enter="userInput" type="text" ref="inputSearch">
    <button @click.prevent="userSearch">Search</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            search: '',
        }
    },
    methods: {
        userSearch() {
            this.$store.dispatch('searchMovie', this.search)
            console.log(this.$store.state.movieList)
            this.search = '';
        }
    },
}
</script>

<style>
 .searchbar {
     width: 300px;
     padding: 10px;
     border: solid 1px rgba(128, 128, 128, 0.719);
     border-radius: 5px;
     margin: 20px 30px;
     outline: none;
     font-family: 'Roboto Condensed', sans-serif;
     font-weight: 300;
 }
 form button {
     padding: 10px;
     border: 1px solid transparent;
     border-radius: 25px;
     background-color: rgb(209, 66, 188);
     cursor: pointer;
 }
</style>