<template>
  <div class="experience-component">
    <div class="row">
      <div class="col">
        <div class="name">
          <h3>
            <span v-if="name">{{ name }}</span>
            <span v-if="position"> - {{ position }}</span>
          </h3>
        </div>
        <div v-if="hasDates()" class="row">
          <div class="col">
            <div class="date">
              <p>{{ toDateString() }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="description">
              <span>{{ description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'Experience',
  props: {
    name: String,
    position: String,
    description: String,
    dateRange: {
      type: Array as PropType<Array<string>>,
      required: true
    }
  },
  methods: {
    hasDates(): boolean {
      const startDate = Date.parse(this.dateRange[0] as string);
      const endDate = Date.parse(this.dateRange[1] as string);
      return !isNaN(startDate) || !isNaN(endDate);
    },
    toDateString(): string {
      const startDate = Date.parse(this.dateRange[0] as string);
      const endDate = Date.parse(this.dateRange[1] as string);
      const dateFormat = 'MMMM YYYY';
      let output = '';
      if (!isNaN(startDate) && isNaN(endDate)) {
        output = dayjs(startDate).format(dateFormat);
      } else if (isNaN(startDate) && !isNaN(endDate)) {
        output = dayjs(endDate).format(dateFormat);
      } else {
        output = `${dayjs(startDate).format(dateFormat)} - `;
        // Append end date if it's less than the current date, otherwise it's 'current'
        if (endDate < Date.now()) {
          output += dayjs(endDate).format(dateFormat);
        }
      }
      return output;
    }
  }
});
</script>

<style scoped lang="scss">
.experience-component {
  padding: 0 0 1rem 0;
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
