<template>
  <div id="count">
    <h1>{{msg}}</h1>
    <button @click="onClick()">Click!</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  @Prop() private msg!: string;
}

</script>
