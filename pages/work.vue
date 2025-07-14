<script setup lang="ts">
const {
  data: previews
} = await useAsyncData(
  'page',
  () => queryCollection('page').all(),
)
</script>

<template>
  <div class="cubes flex flex-wrap">
      <div v-for="preview in previews" :key="preview.id" class="card">
        <pre>a{{ preview.preview_image }}</pre>
      </div>

    <div
      class="cube"
      :style="{
        backgroundImage: 'url(/images/cantini.png)',
      }"
    >
      <router-link
        class="text-white font-light text-3xl"
        to="work/cantini"
      >Can-Tini</router-link>
    </div>

    <div class="cube" />

    <div class="cube" />

    <div class="cube" />
  </div>
</template>

<style scoped>
.cube {
  width: 422px;
  height: 422px;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  background-color: #e4e4e4;

  background-size: cover;
  background-position: 50%;

  display: flex;
  justify-content: left;
  align-content: end;
  align-items: end;
}
</style>
