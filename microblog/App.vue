<template>
  <div>
    <input type="text" :value="currentHashtag" @input="setHashtag">
    <card 
      v-for="post in filteredPosts" 
      :key="post.id">
      <template v-slot:title>
        {{ post.title }}
      </template>

      <template v-slot:content>
        {{ post.content }}
      </template>

      <template v-slot:description>
        <controls :post="post" />
      </template>
    </card>
  </div>
</template>

<script>
import { store } from './store'
import { ref, computed } from 'vue'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
export default {
  components: {
    Card,
    Controls,
  },
  setup () {
    const setHashtag = (evt) => {
      store.setHashtag(evt.target.value)
    }
    return {
      filteredPosts: store.filteredPost,
      currentHashtag: computed(() => store.state.currentHashtag),
      setHashtag
    }
  }
}
</script>

<style>

</style>