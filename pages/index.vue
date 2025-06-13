<template>
  <div>
    <h1>
      <span style="font-weight: 900;">nelson.</span>
      <span style="font-weight: 300;">wien</span>
    </h1>

    <img src="@/assets/images/kitties.svg" class="kitties">
  </div>
</template>

<style>
h1 {
  color: #2647D7;
  font-size: 80px;

  animation: title-animation 1s ease-in-out;
  animation-fill-mode: forwards;
}

/*
.kitties {
  position: fixed;
  right: 0;
  top: 10%;
  width: 90vw;
}
*/

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
