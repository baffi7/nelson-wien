<script setup lang="ts">
const stem = computed(() => `work/${useRoute().params.slug}`)

const {
  data: work,
} = await useAsyncData(
  () => queryCollection('work')
    .where(
      'stem',
      '==',
      stem.value,
    ).first(),
)

useSeoMeta({
  title: work.value?.title,
  description: work.value?.description,
})

onMounted(() => {
  if (work.value.color) {
    document.documentElement.style.setProperty('--color-primary', work.value.color)
  }
})

onUnmounted(() => {
  document.documentElement.style.removeProperty('--color-primary')
})
</script>

<template>
  <ContentRenderer
    v-if="work"
    :value="work"
  />
</template>
