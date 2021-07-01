<template>
  <div class="container">
    <div class="heading">
      <Nav />
    </div>
    <div class="horizontal-divider"></div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav
  }
});
</script>

<style lang="scss">
html {
  color: $font-color;
  background-color: $background-color;
  font-size: 18px;
  body {
    margin: 0 1rem 0 1rem;
  }
  #app {
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .container {
      margin: 0 auto;
      width: 60rem;
      .horizontal-divider {
        border: 1px solid $font-color;
      }
      .heading {
        padding: 1rem 0 1rem 0;
      }
    }
  }
}
</style>
