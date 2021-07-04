<template>
  <div class="container-fluid">
    <div class="heading">
      <Nav />
    </div>
    <div class="horizontal-divider"></div>
    <div class="content">
      <router-view />
    </div>
    <div class="horizontal-divider"></div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    Footer
  },
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  }
});
</script>

<style lang="scss">
html {
  background-color: $main-background-color;
  color: $font-color;
}
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
}
.container-fluid {
  padding: 0 0 0 0 !important;
  .container-wrapped,
  .container-wrapped-1,
  .container-wrapped-2 {
    padding: 2rem 24rem 2rem 24rem;
  }
  .container-wrapped-1 {
    background-color: $accent-1-color;
  }
  .container-wrapped-2 {
    background-color: $accent-2-color;
  }
  .horizontal-divider {
    border: 1px solid $font-color;
  }
  .heading {
    background-color: $main-background-color;
  }
  a,
  a:hover,
  a.router-link-exact-active {
    color: $font-color;
  }
  a {
    text-decoration: none;
  }
  a:hover,
  a.router-link-exact-active {
    text-decoration: underline;
  }
}
</style>
