<template>
  <div id="kakao">
    <vue-daum-map
      :appKey="appKey"
      :center="{lat:37.5665 , lng: 126.9780}"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      @update:center="center=$event"
      style="width: 100%;height:550px;"
    />
  </div>
</template>

<script>
import VueDaumMap from "vue-daum-map";

export default {
  name: "kakaoMap",
  data: () => ({
    appKey: "API_KEY",
    //bind lng, lat values to templete prop
    level: 3,
    mapTypeId: VueDaumMap.MapTypeId.NORMAL,
    libraries: [],
    map: "",
  }),
  components: {
    VueDaumMap,
  },
  methods: {
    onLoad(map) {
      this.map = map;

      // direct access to kakao namespace
      new kakao.maps.Marker({
        position: map.getCenter(),
        map: map,
      });
    },
  },
};
</script>

