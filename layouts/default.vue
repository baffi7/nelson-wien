<template>
  <div>
    <header class="flex flex-wrap items-center justify-between">
      <h1>
        <span style="font-weight: 900;">nelson.</span>
        <span style="font-weight: 300;">wien</span>
      </h1>

      <nav>
        <router-link class="text-lg mr-4" to="/work">
          work
        </router-link>
        <router-link class="text-lg mr-4" to="/about">
          about
        </router-link>
        <router-link class="text-lg mr-4" to="/contact">
          contact
        </router-link>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style>
header {
  position: sticky;
  top: 0;
  z-index: 10;
}

h1 {
  color: #2647D7;
  font-size: 100px;
  margin-top: -0.5em;

  animation: title-animation 1s ease-in-out;
  animation-fill-mode: forwards;
}

nav a {
 /* font-size: 120%; */
  font-weight: 300;
}

nav a.router-link-active {
  font-weight: 400;
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
