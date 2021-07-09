<template>
  <div class="home-view">
    <div class="container-wrapped">
      <p>This is a paragraph.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    useMeta({
      title: 'Home'
    });
  }
});
</script>

<style scoped lang="scss">
.home-view {
}
</style>
