<template>
  <div>
    <div class="row justify-content-center mb-1">
      <h1 class="uh-oh">Uh-oh!</h1>
    </div>
    <div class="row justify-content-center mb-4">
      <span class="subtitle">You look lost on your journey!</span>
    </div>
    <div class="row justify-content-center">
      <router-link to="/" class="btn btn-lg btn-red">Go back home</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .uh-oh{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
  }
  .subtitle{
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
  }
</style>