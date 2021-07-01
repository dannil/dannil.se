<template>
  <div class="experience-component">
    <div v-if="image" class="image">
      <img :src="require(`../${image}`)" alt="title" />
    </div>
    <div class="texts">
      <div class="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="description">
        <span>{{ description }}</span>
      </div>
    </div>
    <div v-if="hasDates()" class="date">
      <p>{{ toDateString() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { format } from 'date-fns';

export default defineComponent({
  name: 'Experience',
  props: {
    image: String,
    title: String,
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
      const dateFormat = 'MMM yyyy';
      let output = '';
      if (!isNaN(startDate) && isNaN(endDate)) {
        output = format(startDate, dateFormat);
      } else if (isNaN(startDate) && !isNaN(endDate)) {
        output = format(endDate, dateFormat);
      } else {
        output = `${format(startDate, dateFormat)} - ${format(
          endDate,
          dateFormat
        )}`;
      }
      return output;
    }
  }
});
</script>

<style scoped lang="scss">
.experience-component {
  background-color: #275e7e;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  .image {
    width: 20%;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  .texts {
    flex-direction: column;
    width: 80%;
    .title {
    }
    .description {
    }
  }
}
</style>
