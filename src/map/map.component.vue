<template>
  <div class="map">
    <h2>"Find your greens here"</h2>
    <select v-model="selected">
      <option disabled value>Please select one</option>
      <option>Community Gardens</option>
      <option>Parks</option>
      <option>Forests</option>
    </select>
  </div>
</template>
