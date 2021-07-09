<template>
  <div class="experiences-view">
    <div class="container-wrapped">
      <h2 class="heading-padding">Employments</h2>
      <div v-for="exp in employments" :key="exp.title">
        <Experience
          :name="exp.name"
          :position="exp.position"
          :description="exp.description"
          :dateRange="exp.dateRange"
        />
      </div>
    </div>
    <div class="container-wrapped">
      <h2 class="heading-padding">Licenses and certifications</h2>
      <div v-for="exp in licensesandcertifications" :key="exp.name">
        <Experience
          :name="exp.name"
          :position="exp.position"
          :description="exp.description"
          :dateRange="exp.dateRange"
        />
      </div>
    </div>
    <div class="container-wrapped">
      <h2 class="heading-padding">Educations</h2>
      <div v-for="exp in educations" :key="exp.name">
        <Experience
          :name="exp.name"
          :position="exp.position"
          :description="exp.description"
          :dateRange="exp.dateRange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import Experience from '@/components/Experience.vue';
import experiences from '@/assets/data/experiences.json';

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
      employments: experiences.employments,
      licensesandcertifications: experiences['licenses-and-certifications'],
      educations: experiences.educations
    };
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
