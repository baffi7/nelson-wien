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
  <div>
    <div
      class="absolute top-20 left-6 text-black max-w-sm p-4 bg-white space-y-4"
    >
      <h1 class="heading text-3xl font-regular text-gray-900">
        {{ work?.heading }}
      </h1>
      <p class="text text-sm text-gray-800 leading-relaxed">
        {{ work?.text }}
      </p>
      <div class="date text-xs text-gray-400">
        {{ work?.date }}
      </div>
    </div>
    <ContentRenderer
      v-if="work"
      :value="work"
    />
  </div>
</template>

<style>
main img {
  max-width: 80vw;
  margin-left: auto;
}
</style>
