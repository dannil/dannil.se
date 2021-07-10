<template>
  <a class="skip-link" href="#content">Skip to content</a>
  <div class="container-fluid">
    <header class="heading">
      <nav>
        <Nav />
      </nav>
    </header>
    <div class="horizontal-divider"></div>
    <main id="content" class="content">
      <router-view />
    </main>
    <div class="horizontal-divider"></div>
    <footer class="footer">
      <Footer />
    </footer>
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
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
</style>
