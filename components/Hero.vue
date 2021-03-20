<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="hero mb-5">
    <NuxtLink :to="`/blog/${lastPost.slug}`">
      <div class="hero__wrapper relative bg-white overflow-hidden mb-6">
        <div class="hero__title-wrapper w-3/6">
          <h1 class="hero__title font-serif font-bold text-gray-800 text-2xl md:text-4xl">
            <span>{{ lastPost.attributes.title }}</span>
          </h1>
        </div>
        <img class="w-full m-0" :src="lastPost.attributes.thumbnail" :alt="lastPost.attributes.title">
      </div>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      lastPost: {
        type: Object
      },
    },
    mounted() {
      console.log(this.lastPost)
    }
  }
</script>

<style lang="scss" scoped>
.hero {
  &__wrapper {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.2);
    }
    
    @media screen and(min-width: 768px) {
      height: 400px;
    }
  }

  /* Heading style */
  &__title,
  &__title:after {
    background-color: #FCCFCD;
    padding-right: 15px;
  }

  &__title {
    position: relative;
    line-height:1;
    display:inline;
    white-space:pre-wrap;
    border:0 solid #FCCFCD;
    border-width:0.25em 0; /* 0.25em is roughly equal to one space character. */

    &-wrapper {
      top: 50%;
      transform: translateY(-50px);
      position: absolute;
      margin-left: 50px;
    }
  }

  &__title:after {
    content:"";
    position:absolute;
    top:-0.25em;
    right:100%;
    bottom:-0.25em;
    width:0.25em;
  }

  &__title > span {
    position:relative;
    z-index:1;
  }
}
</style>