<template>
  <div class="home">
    <img alt="Vue logo" class="img" src="../assets/humaaans.png" />
    <Intro msg="Mingle with the Green" />
    <div id="first"></div>
    <div id="sec"></div>
    <div id="thr"></div>
    <div id="fourth"></div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Footer,
  },
};
</script>

<style scoped>
.img {
  height: auto;
  width: auto;
  max-width: 400px;
  max-height: 400px;
}
#first {
  height: 125px;
  width: 125px;
  background-color: antiquewhite;
  display: inline-grid;
  margin-right: 2em;
}
#sec {
  height: 125px;
  width: 125px;
  background-color: antiquewhite;
  display: inline-grid;
  margin-right: 2em;
}
#thr {
  height: 125px;
  width: 125px;
  background-color: antiquewhite;
  display: inline-grid;
  margin-right: 2em;
}
#fourth {
  height: 125px;
  width: 125px;
  background-color: antiquewhite;
  display: inline-grid;
  margin-right: 2em;
}
</style>