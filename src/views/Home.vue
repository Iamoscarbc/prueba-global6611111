<template>
  <div>
    <div class="container-fluid d-flex flex-column justify-content-center contenedor-h" style="">
      <div class="row justify-content-center row-1">
        <img src="../assets/img/pikachu.png" class="img-pikachu"/>
      </div>
      <div class="row justify-content-center row-2">
        <h2 class="title">Welcome to Pokédex</h2>
      </div>
      <div class="row justify-content-center container-btn">
        <div class="description">
          <span class="subtitle">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <router-link to="/pokemons" class="btn btn-lg btn-red">Get started</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped>
.row-2{
  margin-bottom: 2.25%;
}
.img-pikachu{
  margin-left: 60px;
}
.row-1{
  margin-bottom: 6%;
}
.contenedor-h{
  height: 100%
}
.title{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
}
.subtitle{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #5E5E5E;
}
.container-btn{
  margin-bottom: 5.3%;
}
.description {
  max-width: 569px;
  text-align: center;
}
</style>
