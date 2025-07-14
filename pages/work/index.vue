<script setup lang="ts">
const {
  data: previews,
} = await useAsyncData(
  'work',
  () => queryCollection('work').all(),
)
</script>

<template>
  <div class="cubes flex flex-wrap">
    <div
      v-for="preview in previews"
      :key="preview.id"
      class="cube"
      :style="{
        backgroundImage: 'url(' + preview.preview_image + ')',
      }"
    >
      <NuxtLink
        class="text-white font-light text-3xl"
        :to="preview.stem"
      >
        {{ preview.title }}
      </NuxtLink>
    </div>
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
