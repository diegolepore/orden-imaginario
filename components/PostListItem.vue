<template>
  <!-- component -->
  <!-- <div class="mx-auto max-w-xl"> -->
  <div class="md:w-9/12 mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="md:col-span-1 flex justify-center">
        <img class="w-2/4 lg:w-full" :src="post.attributes.thumbnail" alt="">
      </div>
      <div class="md:col-span-3">
        <NuxtLink :to="slug">
          <h2 class="text-2xl md:text-3xl mb-8">{{ post.attributes.title }}</h2>
        </NuxtLink>
        <p> {{ post.attributes.excerpt }} </p>

        <div class="author flex items-center -ml-3 my-3">
          <div class="user-logo">
            <img
              class="w-12 h-12 object-cover rounded-full mx-4 shadow pointer-events-none"
              :src="post.attributes.avatar"
              alt="avatar"
            />
          </div>
          <h2 class="text-sm tracking-tighter text-gray-900">
            <h4 class="mb-2">{{ post.attributes.autor }}</h4>
            <span class="text-gray-600 block">{{ postDate }}</span>
          </h2>
        </div>
      </div>
    </div>

    <!-- <div class="bg-white mb-6 tracking-wide transition duration-300 ease-in-out hover:scale-105 hover:z-index-5 transform">
      <div class="md:flex-shrink-0">
        <NuxtLink :to="slug">
          <img
            :src="post.attributes.thumbnail"
            alt=""
            class="w-full h-64 rounded-t-md"
          />
        </NuxtLink>
      </div>
      <div class="px-4 py-4 bg-brand-gray1 border-b-4 border-purple-400">
        <h2 class="font-sans font-black uppercase text-sm mb-3 text-gray-800 tracking-normal clamp-1">
          <NuxtLink :to="slug">{{ post.attributes.title }}</NuxtLink>
        </h2>
        <p class="text-sm text-gray-700 mr-1 clamp-2">
          {{ post.attributes.excerpt }}
        </p>
        <div class="flex items-center justify-between mt-2 mx-6">
          
        </div>
        <div class="author flex items-center -ml-3 my-3">
          <div class="user-logo">
            <img
              class="w-12 h-12 object-cover rounded-full mx-4 shadow"
              :src="post.attributes.avatar"
              alt="avatar"
            />
          </div>
          <h2 class="text-sm tracking-tighter text-gray-900">
            <a href="#">{{ post.attributes.author }}</a>
            <span class="text-gray-600 block">{{ postDate }}</span>
          </h2>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    postDate() {
      const d = new Date(this.post.attributes.date)
      const formattedDate = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
      return formattedDate 
    },
    slug() {
       return `/blog/${this.post.slug}`
    }
  },
  mounted () {
    console.log(this.post.attributes)
  },
};
</script>

<style lang="scss" scoped>
</style>