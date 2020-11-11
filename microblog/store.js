import { reactive } from 'vue'
import { testPosts } from './testPosts.js'
import { computed } from 'vue'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: null
    })
  }

  get filteredPost () {
    return computed(() => {
      if(!this.state.currentHashtag) {
        return this.state.posts
      }
      return this.state.posts.filter(
       post => post.hashtags.includes(this.state.currentHashtag)
      )
    })
   
  }

  getPostById (id) {
    return this.state.posts.filter(post => posts.id == id)
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag
  }

  incrementLike(post) {
    this.state.posts.find( data => data.id == post.id).likes++
  }
}

export const store = new Store()