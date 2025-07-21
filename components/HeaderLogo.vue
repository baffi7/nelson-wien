<template>
  <h1>
    <span style="font-weight: 900;">nelson.</span>
    <span style="font-weight: 300;">wien</span>
  </h1>
</template>

<style>
h1 {
  color: var(--color-primary, #2647D7);
  font-size: 100px;
  margin-top: -0.5em;

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
