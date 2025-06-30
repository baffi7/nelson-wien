<template>
  <div>
    <div class="header">
      <h1>
        <span style="font-weight: 900;">nelson.</span>
        <span style="font-weight: 300;">wien</span>
      </h1>

      <nav>
        <router-link to="/work">
          work
        </router-link>
        <router-link to="/about">
          about
        </router-link>
        <router-link to="/contact">
          contact
        </router-link>
      </nav>
    </div>

    <slot />
  </div>
</template>

<style>
h1 {
  color: #2647D7;
  font-size: 80px;

  animation: title-animation 1s ease-in-out;
  animation-fill-mode: forwards;
}

.header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-size: 120%;
  margin-right: 1em;
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
