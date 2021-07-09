<template>
  <div class="experiences-view">
    <template v-for="key in Object.keys(experiences)" :key="key">
      <div class="container-wrapped">
        <h2 class="heading-padding">{{ normalize(key) }}</h2>
        <template v-for="experience in experiences[key]" :key="experience.name">
          <Experience
            :name="experience.name"
            :position="experience.position"
            :description="experience.description"
            :dateRange="experience.dateRange"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import Experience from '@/components/Experience.vue';
import experiencesData from '@/assets/data/experiences.json';

export default defineComponent({
  name: 'Experiences',
  components: {
    Experience
  },
  setup() {
    useMeta({
      title: 'Experiences'
    });
  },
  data() {
    return {
      experiences: experiencesData
    };
  },
  methods: {
    normalize(str: string): string {
      // Uppercase first letter
      let normalized = str.charAt(0).toUpperCase() + str.slice(1);
      // Remove dashes
      normalized = normalized.replaceAll('-', ' ');
      return normalized;
    }
  }
});
</script>

<style scoped lang="scss">
.experiences-view {
  .heading-padding {
    padding: 0 0 1rem 0rem;
  }
}
</style>
