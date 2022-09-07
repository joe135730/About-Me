<template>
    <div
    class="
      introduction
      flex
      sm:flex-row
      flex-col
      items-center
      justify-between
      py-28
      px-5
      text-white
    "
  >
    <p class="text-4xl font-bold sm:mb-6">PAGES</p>
    <p class="text-xl font-bold">
      <router-link to="/Home">Home</router-link>/ Pages
    </p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.introduction {
  background-color: #2a4b7c;
}
</style>