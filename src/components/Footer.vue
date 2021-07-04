<template>
  <div class="footer-component">
    <div class="container-wrapped">
      <div class="row">
        <div class="col">
          <h4>Links</h4>
          <div class="row">
            <div class="col">
              <ul>
                <li>
                  <a :href="linkedInUrl">LinkedIn</a>
                </li>
                <li>
                  <a :href="githubUrl">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      githubUrl: 'https://github.com/dannil',
      linkedInUrl: 'https://www.linkedin.com/in/daniel-nilsson-3917a3b1'
    };
  }
});
</script>

<style scoped lang="scss">
.footer-component {
  ul,
  li {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
}
</style>
