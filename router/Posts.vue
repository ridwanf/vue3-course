<template>
  <div class="">
    <h4>Posts</h4>
    <router-link
      v-for="post in testPosts"
      :to="`/posts/${post.id}`"
      :key="post.id"
    >
    {{post.title}} <br>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import { testPosts } from '../microblog/testPosts.js'
export default {
  setup(props, ctx) {
    return {
      testPosts,
    }
  }
}
</script>

<style>

</style>