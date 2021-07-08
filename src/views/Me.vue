<template>
  <div class="me-view">
    <div class="container-wrapped-1">
      <p>This is a paragraph.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'Me',
  components: {},
  setup() {
    useMeta({
      title: 'Me'
    });
  }
});
</script>

<style scoped lang="scss">
.me-view {
}
</style>
