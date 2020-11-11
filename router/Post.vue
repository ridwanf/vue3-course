<template>
  <div class="">
    {{post.title}}
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router/dist/vue-router.esm-browser.js'
import { store } from '../microblog/store'
export default {
  // setup () {
  //   const route = useRoute()
  //   const post = store.getPostById(route.params)

  //   return {
  //     post
  //   }
  // }

  computed: {
    post () {
      return store.getPostById(this.$route.params.id )
    }
  }
}
</script>

<style>

</style>