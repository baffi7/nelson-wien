<template>
  <div>
    <header class="flex flex-wrap items-center justify-between">
      <HeaderLogo />

      <nav>
        <NuxtLink
          class="text-lg mr-4"
          to="/work"
        >
          work
        </NuxtLink>
        <NuxtLink
          class="text-lg mr-4"
          to="/about"
        >
          about
        </NuxtLink>
        <NuxtLink
          class="text-lg mr-4"
          to="/contact"
        >
          contact
        </NuxtLink>
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
  z-index: 1;
  filter: invert(100%);
  mix-blend-mode: difference;
}

nav a {
 /* font-size: 120%; */
  font-weight: 300;
}

nav a.NuxtLink-active {
  font-weight: 400;
}
</style>
