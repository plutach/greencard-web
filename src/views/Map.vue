<template>
  <div class="map">
    <h2>Find your Greens to mingle with..</h2>
    <select v-model="placeVal" calss="options">
      <option
        v-for="place in places"
        :value="place"
        :key="place"
        placeholder="Where to go?"
      >{{place.title}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      places: [
        {
          title: "Community Garden",
        },
        {
          title: "Hiking Trails",
        },
        {
          title: "Camping Grounds",
        },
        {
          title: "Parks",
        },
      ],
      placeVal: null,
    };
  },
});
</script>

<style scoped>
select,
option {
  width: 250px;
  height: 25px;
}

option {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
