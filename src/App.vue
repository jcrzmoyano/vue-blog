<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>

    <router-view />

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
@import url("./assets/css/styles.css");
</style>
