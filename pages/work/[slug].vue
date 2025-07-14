<script setup lang="ts">
const {
  data: previews,
} = await useAsyncData(
  'page',
  () => queryCollection('page').all(),
)
</script>

<template>
  <div class="cubes flex flex-wrap">
    JOOO
  </div>
</template>
