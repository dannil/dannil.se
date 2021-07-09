<template>
  <nav class="nav-component">
    <div class="container-wrapped">
      <div class="row">
        <div class="col">
          <router-link to="/">Home</router-link> |
          <router-link to="/me">Me</router-link> |
          <router-link to="/experiences">Experiences</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav'
});
</script>

<style scoped lang="scss">
.nav-component {
  a {
    color: $font-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
