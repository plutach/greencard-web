<template>
  <div class="about">
    <Map map="Find your greens here" />
    <select v-model="selected">
      <option disabled value>Please select one</option>
      <option>Community Gardens</option>
      <option>Parks</option>
      <option>Forests</option>
    </select>
  </div>
</template>
<script>
import Map from "@/components/Map.vue";

export default {
  name: "About",
  components: {
    Map,
  },
};
</script>
