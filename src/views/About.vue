<template>
  <div class="about">
    <h1>Find your greens here</h1>
    <Counter ms="Please select" />
  </div>
</template>
<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "About",
  components: {
    Counter
  }
};
</script>
