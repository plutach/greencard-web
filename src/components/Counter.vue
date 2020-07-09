<template>
  <div class="Count">
    <h1>{{ ms }}</h1>
    <input v-model="message" placeholder="Where do you want to go?" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Counter extends Vue {
  @Prop() private ms!: string;
}
</script>
