<template>
  <div class="Map">
    <h3>{{ map }}</h3>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Map extends Vue {
  @Prop() private map!: string;
}
</script>
