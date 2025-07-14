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
</script>

<template>
  <ContentRenderer
    v-if="work"
    :value="work"
  />
</template>
