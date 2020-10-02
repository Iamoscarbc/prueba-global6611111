<template>
  <div>
    <router-view class="wrapper" />
  </div>
</template>

<style>
body .wrapper {
  min-height: 100vh;
  position: relative;
  background: #f9f9f9;
}
.wrapper {
  position: relative;
  top: 0;
  height: 100vh;
}
.router-link-active {
  background-color: #f22539 !important;
  border-color : #f22539 !important;
}
.btn-red {
  background-color: #f22539 !important;
  border-color : #f22539 !important;
}

.btn-red:hover {
  color: #ffffff !important;
}

.router-link {
  background-color: #bfbfbf !important;
}

.btn-gray {
  background-color: #bfbfbf;
}

.btn{
  color: #ffffff !important;
  border-radius: 60px !important;
  font-size: 18px !important;
  max-height: 44px !important;
  font-weight: 600 !important;
}

.btn-gray:hover {
  color: #ffffff !important;
}
</style>
