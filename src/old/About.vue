<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Experience
      image="nexer.jpg"
      title="Nexer Group"
      description="This is my description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Experience from '@/components/Experience.vue';

export default defineComponent({
  name: 'About',
  components: {
    Experience
  }
});
</script>
