<template>
  <div id="locations">
    <vue-daum-map
      :appKey="appKey"
      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      style="width:500px;height:400px;"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueDaumMap from "vue-daum-map";
export default Vue.extend({
  data: () => ({
    appKey: "5c7613275fc094f3c5926ca104b9d99b", // 테스트용 appkey
    center: { lat: 33.450701, lng: 126.570667 }, // 지도의 중심 좌표
    level: 3, // 지도의 레벨(확대, 축소 정도),
    mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
    libraries: [], // 추가로 불러올 라이브러리
    map: null, // 지도 객체. 지도가 로드되면 할당됨.
  }),
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map) {
      this.map = map;
    },
  },
});
</script>

<style lang="scss" scoped>
#locations {
  margin: 3em auto;
  width: 100%;
  height: 550px;
  background-color: #d3d0d0;
}
</style>


