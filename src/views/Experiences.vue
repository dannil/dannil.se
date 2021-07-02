<template>
  <div class="experiences-view">
    <div class="container-wrapped-1">
      <h2 class="heading-padding">Employments</h2>
      <div class="employments-data">
        <div v-for="exp in employments" :key="exp.title">
          <Experience
            :image="exp.image"
            :name="exp.name"
            :position="exp.position"
            :description="exp.description"
            :dateRange="exp.dateRange"
          />
        </div>
      </div>
    </div>
    <div class="container-wrapped-2">
      <h2 class="heading-padding">Licenses and certifications</h2>
      <div class="employments-data">
        <div v-for="exp in licensesandcertifications" :key="exp.name">
          <Experience
            :image="exp.image"
            :name="exp.name"
            :position="exp.position"
            :description="exp.description"
            :dateRange="exp.dateRange"
          />
        </div>
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
      employments: experiences.employments,
      licensesandcertifications: experiences['licenses-and-certifications']
    };
  }
});
</script>

<style scoped lang="scss">
.experiences-view {
  .heading-padding {
    padding: 0 0 1rem 0rem;
  }
  // .container-rounded {
  //   border-radius: 10px;
  //   border: 1px solid $font-color;
  //   overflow: hidden;
  // }
}
</style>
