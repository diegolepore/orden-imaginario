// this is a dynamically created template

<template>
  <article class="blog">
    <Hero :last-post="post"/>
    <div class="blog__body">
      <div class="blog__body-left" v-html="post.html"></div>
      <!-- <div class="blog__body-right"></div> -->
    </div>
    <div class="text-center my-12 md:my-16 flex items-center">
      <img
        class="mb-0 w-12 h-12 object-cover rounded-full mr-4 shadow"
        :src="post.attributes.avatar"
        alt="avatar"
      />
      <div class="text-left">
        <h4 class="m-0">{{ post.attributes.author }}</h4>
        <span class="text-gray-600 block">{{ postDate }}</span>
      </div>
    </div>
    <div class="blog__footer flex-col md:flex-row flex items-center justify-center md:justify-between">
      <div class="pb-5"> 
        <NuxtLink :to="`/blog/${prevBlogPath}`" class="flex items-center">
          <svg class="h-5 w-5 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg> 
          Ir al artículo anterior
        </NuxtLink>
      </div>
      <div class="pb-5">
        <NuxtLink :to="`/blog/${nextBlogPath}`" class="flex items-center">
          Ir al próximo artículo
          <svg class="h-5 w-5 fill-current ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
<script>
  export default {
    // get the slug as a param to import the correct md file
    async asyncData({ params }) {
      try {
        const currentPath = params.slug
        // get current post data
        const post = await import(`~/content/blog-posts/${currentPath}.md`);
        const postAndSlug = { ...post, slug: currentPath }
        
        // get all post data for next route
        const allPosts = await require.context("~/content/blog-posts", true, /\.md$/)
        const posts =  allPosts.keys().map((key) => {
          // give back the value of each post context
          console.log("allPosts", allPosts)
          console.log("key", key)
          return { ...allPosts(key), slug: key.slice(2,-3) }
        })
        const sortedPosts = posts.sort((a, b) => Date.parse(b.attributes.date) - Date.parse(a.attributes.date));

        const sortedPaths = [] 
        sortedPosts.map(post => {
          console.log("POST: ", post)
          sortedPaths.push(post.slug)
        })
       
        return {
          sortedPaths,
          post: postAndSlug,
          currentPath,
        }
      } catch(err) {
        console.debug(err)
        return false
      }
    },
    computed: {
      postDate() {
        const d = new Date(this.post.attributes.date)
        const formattedDate = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
        return formattedDate 
      },
      nextBlogPath() {
        const firstBlogPath = this.sortedPaths[0]
        // if there's no 'next' path, return the first path
        const nextPath = isNull(this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]) ? firstBlogPath : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]
        function isNull(item) {
          return item === null || item === undefined
        }
        return nextPath
      },
      prevBlogPath() {
        const lastBlogPath = this.sortedPaths[this.sortedPaths.length - 1]
        // if there's no 'prev' path, return the last path
        const nextPath = isNull(this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) - 1]) ? lastBlogPath : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) - 1]
        function isNull(item) {
          return item === null || item === undefined
        }
        return nextPath
      } 
    }, 
  }
</script>

<style lang="scss">
.blog {
  &__body {
    &-left {
      margin: 0 auto;
      max-width: 680px;
      width: 100%;
    }

    img {
      display: block;
      margin: 60px auto;
      max-width: 500px;
      width: 100%;
    }

    a {
      color: #615CFC;
      text-decoration: underline;
    }

    ul {
      list-style-type: disc;
    }
    
    ol {
      list-style-type: decimal;
    }
  }
}
</style>