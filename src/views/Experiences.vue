<template>
  <div class="experiences-view">
    <h1>experiences.</h1>
    <p>This is a paragraph.</p>
    <Experience :dateRange="['2021-06-01', '2021-07-01']" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '@/components/Experience.vue';

export default defineComponent({
  name: 'Experiences',
  components: {
    Experience
  }
});
</script>

<style scoped lang="scss">
.experiences-view {
}
</style>
