<template>
  <div id="map" ref="map">
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 550px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class GoogleMap extends Vue {
  @Prop() private center!: { lat: number; lng: number };
  markers = new Array<string>();
  places = new Array<[]>();
  currentPlace: any = null;

  mounted() {
    this.geolocate();
  }

  private setPlace(place: any) {
    this.currentPlace = place;
  }

  private addMaker() {
    if (this.currentPlace) {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng(),
      };
      // this.markers.push({  });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    }
  }

  private geolocate = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  };
}
</script>

<style lang="scss" scoped>
#map {
  margin: 3em auto;
  width: 100%;
  height: 550px;
  background-color: #d3d0d0;
}
</style>


