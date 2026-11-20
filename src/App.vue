<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import router from './router/index.js';
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.app-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
}
</style>
