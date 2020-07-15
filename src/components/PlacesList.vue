
<template>
  <div class="places">
    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="items" filled label="Filled style"></v-select>
    </v-col>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Places extends Vue {
  @Prop() private items: string[] = ["Foo", "Bar", "Fizz", "Buzz"];
}
</script>