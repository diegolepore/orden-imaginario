<template>
  <div>
    <Hero :last-post="sortedPosts[0]"/>

    <ul class="lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 m-0">
      <li v-for="(post, index) in sortedPosts" :key="index">
        <PostListItem :post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  async asyncData() {
  
    const allPosts = await require.context("~/content/blog-posts", true, /\.md$/)
    const posts =  allPosts.keys().map((key) => {
      // give back the value of each post context
      console.log("allPosts", allPosts)
      console.log("key", key)
      return { ...allPosts(key), slug: key.slice(2,-3) }
    })
    const sortedPosts = posts.sort((a, b) => Date.parse(b.attributes.date) - Date.parse(a.attributes.date));


    return {
      sortedPosts,
      // boxMessages
    }
  },

  methods: {
    formatSlug(title) {
      const regex = / /gi;
      return title.toLowerCase().trim().replace(regex, "-")
    },
  },

  mounted() {
    console.log(this.sortedPosts)
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .title {
  font: 36px/1.25 Ubuntu, sans-serif;
  line-height: 1.25em;
  text-transform: uppercase;
  margin-bottom: 1em;
}
.title .highlight {
  display: inline;
  background: #ee4035;
  color: #fff;
  padding: 0.25em;
}
.title .highlight--wrapping {
  position: relative;
  left: 0.25em;
  padding-left: 0;
  box-shadow: 0.25em 0 0 #ee4035, -0.25em 0 0 #ee4035;
}

html,
body {
  background: #ccc;
  text-align: left;
  padding: 3%;
  font: 100%/1.5 Ubuntu, sans-serif;
}

h1.title {
  font-size: 3em;
}

p {
  margin-bottom: 1em;
}

del {
  opacity: 0.3;
}

a {
  color: #ee4035;
}

.bdb .highlight {
  background-color: green;
  box-decoration-break: clone;
} */

</style>
