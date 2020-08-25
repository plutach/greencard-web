<template>
  <div class="home">
    <img alt="Vue logo" class="img" src="../assets/leaf.png" />
    <Intro msg="Mingle with the Green" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "Home",
  components: {
    Intro,
  },
};
</script>

<style scoped>
.img {
  height: auto;
  width: auto;
  max-width: 300px;
  max-height: 300px;
}
</style>