<template>
  <div class="">
    <div class="like">
      <button @click="like">
        Like
      </button>
      <div class="">
        {{ post.likes }}
      </div>
    </div>
    <hashtag v-for="tag in post.hashtags" :hashtag="tag" :key="tag"
    />
  </div>
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from './store'

export default {
  components: {
    Hashtag,
  },
  props: {
    post: {
      type: Object,
      default: {}
    }
  },
  setup (props, ctx) {
    const like = () => {
      store.incrementLike(props.post)
    }
    return {
      like,
    }
  },
}
</script>

<style scoped>
  .like {
    display: flex;
    justify-content: center;
  }
</style>