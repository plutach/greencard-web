<template>
  <div class="map">
    <h2>Find your Greens to mingle with..</h2>
    <!-- TODO add a multi select menu  -->
    <div id="sel">
      <v-select
        v-model="placeVal"
        class="style-chooser"
        placeholder="Where to go?"
        :options="places"
      />
    </div>
    <kakaoMap />

    <Footer />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Footer from "@/components/footer.vue";
import kakaoMap from "@/components/kakaoMap.vue";

Vue.component("v-select", vSelect);
export default {
  components: {
    Footer,
    kakaoMap,
  },
  data() {
    return {
      places: [
        "Commuity Gardens",
        "Hiking Trails",
        "Camping Grounds",
        "Parks",
        "Forests",
      ],
      placeVal: null,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
#sel {
  max-width: 30em;
  margin: 1em auto;
}

$vs-state-active-bg: #42b983;

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: $vs-state-active-bg;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #989b9a;
}
</style>
