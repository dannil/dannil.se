<template>
  <div class="nav-component">
    <router-link to="/">home</router-link> |
    <router-link to="/me">me</router-link> |
    <router-link to="/experiences">experiences</router-link>
  </div>
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
