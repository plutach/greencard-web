<template>
  <div class="map">
    <h2>Find your Greens to mingle with..</h2>
    <!-- <select v-model="placeVal" placeholder="Where to go?">
      <option v-for="place in places" :value="place" :key="place">{{place.title }}</option>
    </select>-->

    <v-select class="style-chooser" placeholder="Where to go?" :options="places.title" />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
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
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
</style>
