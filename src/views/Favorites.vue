<template>
  <div>
    <div class="container-fluid d-flex flex-column">
      <div class="col-12 mt-custom-pokemons">
        <div class="row justify-content-center mb-custom-search">
          <div class="d-flex flex-row container-searcher-pokemons">
            <img class="mx-3 icon-search" src="../assets/svg/search.svg" />
            <input type="text" class="searcher-pokemons" placeholder="Search" v-model="pokemonSearch"/>
          </div>
        </div>
        <NotFoundResults v-if="arrayPokemons.length == 0 && !Loading" />
        <ListPokemons v-if="arrayPokemons.length != 0 && !Loading" :results="arrayPokemons" />
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import NotFoundResults from "../components/NotFoundResults";
import ListPokemons from "../components/ListPokemons";
import Footer from "../components/Footer";
export default {
  components: {
    NotFoundResults,
    ListPokemons,
    Footer,
  },
  data() {
    return {
      results: [],
      Loading: true,
      pokemonSearch : ""
    };
  },
  async beforeMount() {
    if(this.$store.state.pokemons.length != 0){
      this.$store.state.pokemons.forEach(e => {
        if(e.favorite == true){
          this.results.push(e)
        }
      });
    }
    await this.getPokemons();
  },
  methods: {
    getPokemons() {
      if(this.results.length == 0){
        this.loading();       
        // this.axios.get("/pokemon")
        //   .then((res) => {
            // this.$store.commit("getPokemonsVX", res.data.results);
            this.$store.state.pokemons.forEach(e => {
              if(e.favorite == true){
                this.results.push(e)
              }
            });
            this.Loading = false;
            setTimeout(() => {
              Swal.close();
            }, 1500);
          // })
          // .catch((err) => {
          //   this.Loading = false;
          //   setTimeout(() => {
          //     Swal.close();
          //   }, 1500);
          //   console.log("err :>> ", err);
          // });
      }else{
        this.Loading = false;
      }
    },
    loading() {
      this.Loading = true;
      Swal.fire({
        allowOutsideClick: false,
        html:'<img class="imgr" id="imgr2" src="/img/Loader.png">',
        showConfirmButton: false,
        background: 'transparent'
      });
    },
  },
  computed: {
    arrayPokemons: function() {
      if(this.pokemonSearch != ""){
        return this.results.filter((r) => {
            return r.name.match(this.pokemonSearch);
        });
      }else{
        return this.results
      }
    }
  }
};
</script>

<style scoped>
.container-searcher-pokemons {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border-radius: 5px;
}
.searcher-pokemons {
  border: none;
  height: 50px;
  width: 520px;
  border-radius: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
}
input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #bfbfbf;
  opacity: 1; /* Firefox */
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bfbfbf;
}

input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #bfbfbf;
}

.mt-custom-pokemons {
  margin-top: 35px;
}

.mb-custom-search {
  margin-bottom: 40px;
}
</style>