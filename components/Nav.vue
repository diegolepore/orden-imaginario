<template>
  <div class="nav">
    <nav class="bg-white shadow-lg rounded-t-md">
      <div class="md:flex items-center justify-between pt-8 px-5 md:px-12">
        <div class="nav__logo flex justify-between items-center relative">
          <div
            class="text-2xl font-serif font-bold text-gray-100 bg-gray-800 md:text-3xl px-6"
          >
            <NuxtLink to="/">Orden Imaginarios</NuxtLink>
          </div>
          <div
            class="nav__logo-name text-xs absolute flex font-sans font-bold text-gray-100 bg-indigo-600 px-4"
          >
            <NuxtLink to="/">Diego Palacios</NuxtLink>
          </div>
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              type="button"
              class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <template v-if="mobileMenuOpen">
                <svg
                  class="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </template>
              <template v-else>
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    class="hidden"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                  <path
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </template>
            </button>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row md:block -mx-2 pt-8 md:pt-0"
          :class="{ hidden: !mobileMenuOpen }"
        >
          <NuxtLink
            to="/"
            class="text-gray-800 rounded hover:bg-brand-purple hover:text-gray-100 font-sans font-black py-2 px-2 md:mx-2"
          >
            INICIO
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-800 rounded hover:bg-brand-purple hover:text-gray-100 font-sans font-black py-2 px-2 md:mx-2"
          >
            ACERCA DE MI
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__logo {
    &-name {
      top: 100%;
      z-index: 2;
    }
  }
}
</style>