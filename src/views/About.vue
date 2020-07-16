<template>
  <div class="about">
    <h1>Find your greens here</h1>
    <Map map="Please select your favorite place to be" />
  </div>
</template>
<script>
import Map from '@/components/Map.vue';

export default {
  name: 'About',
  components: {
    Map
  }
};
</script>
