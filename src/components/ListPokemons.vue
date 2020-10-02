<template>
  <div>
    <div class="row justify-content-center mt-5 container-card-list">
      <div class="list-custom">
        <div
          class="card-list d-flex flex-row align-items-center justify-content-between mb-2"
          v-b-modal.modal-center
          @click="openModal(p)"
          v-for="(p,i) in results"
          :key="i"
        >
          <div class="col-10">
            <span class="text-capitalize name-pokemon">{{p.name}}</span>
          </div>
          <div class="col-2 d-flex flex-row justify-content-end">
            <button
              class="btn btn-gray-custom"
              v-if="p.favorite == true"
              @click="changeFavorite(false, i)"
            >
              <svg width="24" height="24" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z"
                  fill="#ECA539"
                />
              </svg>
            </button>
            <button class="btn btn-gray-custom" v-else @click="changeFavorite(true, i)">
              <svg width="24" height="24" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z"
                  fill="#BFBFBF"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-center" hide-header hide-footer hide-body v-model="show">
      <template>
        <div class="row container-img-back">
            <img class="pokemon-img" :src="getImages()">
            <img class="background-img" src="../assets/img/background.png">
        </div>
        <div class="container-fluid">
          <div class="row p-2">
            <div class="col-12">
              <div class="row">
                <span class="properties text-capitalize">Name: 
                    <span class="properties-value">{{poke.name}}</span>
                </span>
                <hr class="separator">
              </div>
              <div class="row">
                <span class="properties text-capitalize">Weight: 
                    <span class="properties-value">{{poke.weight}}</span>
                </span>
                <hr class="separator">
              </div>
              <div class="row">
                <span class="properties text-capitalize">Height: 
                    <span class="properties-value">{{poke.height}}</span>
                </span>
                <hr class="separator">
              </div>
              <div class="row">
                <span class="properties text-capitalize">Types: 
                    <span class="properties-value">{{ obtainTypes(poke.types) }}</span>
                </span>
                <hr class="separator">
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["results"],
  data() {
    return {
      poke: {},
      show: false
    };
  },
  beforeMount() {},
  methods: {
    changeFavorite(value, item) {
      let change = false;
      for (let i = 0; i < this.results.length && change == false; i++) {
        const r = this.results[i];
        if (i == item) {
          r.favorite = value;
          change = true;
        }
      }
      change = false;
      for (
        let j = 0;
        j < this.$store.state.pokemons.length && change == false;
        j++
      ) {
        const r = this.$store.state.pokemons[j];
        if (j == item) {
          r.favorite = value;
          change = true;
        }
      }
      this.$store.commit("getPokemonsVX", this.$store.state.pokemons);
    },
    openModal(p) {
      this.axios
        .get(`/pokemon/${p.name}`)
        .then((res) => {
            this.poke = res.data
            this.show = true
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    },
    obtainTypes(types){
        if(typeof types != "undefined"){
            let S = ""
            for (let i = 0; i < types.length; i++) {
                const t = types[i];
                if(i == 0){
                    S += t.type.name
                }else{
                    S += ", "+t.type.name
                }
            }
            return S
        }
    },
    getImages(){
        if(typeof this.poke.sprites != "undefined"){
            return this.poke.sprites.other['official-artwork'].front_default;
        }
    }
  },
};
</script>

<style scoped>
.pokemon-img{
    position: absolute;
    width: 180px;
    right: 0;
    left: 165px;
    z-index: 100
}
.background-img{    
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
    width:100%;
}
.container-img-back{
    margin-top: -16px;
    margin-right: -16px;
    margin-left: -16px;
    margin-bottom: 16px;
}
.separator {    
    border: 1px solid #E8E8E8;
    width: 100%;
}
.properties {
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
}
.properties-value{
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}
.container-card-list {
  height: 476px;
}
.card-list {
  height: 60px;
  width: 570px;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #353535;
}
.list-custom {
  overflow-y: scroll;
  height: 100%;
}
.name-pokemon {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.btn-gray-custom {
  background-color: #f5f5f5;
  padding-right: 7px;
  padding-left: 7px;
}
</style>