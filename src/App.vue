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
  },
  data() {
    return {
      fallbackTitle: process.env.VUE_APP_FALLBACK_TITLE
    };
  }
});
</script>

<style lang="scss">
html {
  background-color: $main-background-color;
}
#app {
  color: $font-color;
  font-size: 16px;
  font-family: 'Verdana', 'Geneva', sans-serif;
}
.container-fluid {
  padding: 0 0 0 0 !important;
  .heading {
    background-color: $main-background-color;
  }
  .container-wrapped {
    padding: 2rem 24rem 2rem 24rem;
  }
  .content {
    .container-wrapped:nth-of-type(odd) {
      background-color: $accent-1-color;
    }
    .container-wrapped:nth-of-type(even) {
      background-color: $accent-2-color;
    }
  }
  .horizontal-divider {
    border: 1px solid $font-color;
  }
}
</style>
