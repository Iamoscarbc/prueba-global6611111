import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons : []
  },
  mutations: {
    initialiseStore (){
      let pokemons = localStorage.getItem('pokemons');
      if(typeof pokemons != "undefined" || pokemons != null){
        this.commit('getPokemonsVX', JSON.parse(pokemons))
      }
    },
    getPokemonsVX (state, pokemons) {
      if(pokemons != null){
        state.pokemons = pokemons
        localStorage.setItem('pokemons',JSON.stringify(pokemons))
      }
    }
  },
  actions: {
    setPokemons(context, state) {
      console.log('state.pokemons :>> ', state.pokemons);
    }
  },
  modules: {
  }
})
