<script setup lang="ts">
const {
  data: home,
} = await useAsyncData(
  () => queryCollection('home').path('/').first(),
)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})
</script>

<template>
  <ContentRenderer
    v-if="home"
    :value="home"
  />
</template>
