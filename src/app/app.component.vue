<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/maps">Map</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>

<style lang="scss" src="./app.scss"></style>