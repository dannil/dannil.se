<template>
  <div class="experiences-view">
    <h1>experiences.</h1>
    <p>This is a paragraph.</p>
    <div class="employments">
      <h2>employments.</h2>
      <div v-for="employment in employments" :key="employment.title">
        <Experience
          :image="employment.image"
          :title="employment.title"
          :description="employment.description"
          :dateRange="employment.dateRange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '@/components/Experience.vue';
import experiences from '@/assets/data/experiences.json';

export default defineComponent({
  name: 'Experiences',
  components: {
    Experience
  },
  data() {
    return {
      employments: experiences.employments
    };
  }
});
</script>

<style scoped lang="scss">
.experiences-view {
}
</style>
