<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <span style="font-weight: 900;">nelson.</span>
    <span style="font-weight: 300;">wien</span>
  </NuxtLink>
</template>

<style>
.logo {
  color: var(--color-primary);
  font-size: 100px;
  line-height: 1;
  margin-top: -0.25em;

  transition: 200ms;

  animation: title-animation 1s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes title-animation {
  0% {
    opacity: 0;
    transform: translateX(-20px);
    letter-spacing: -0.15em;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
    letter-spacing: -0.05em;
  }
}
</style>
