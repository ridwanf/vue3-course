<template>
<div class="">
  <layout>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album" />
    </template>
    <template v-slot:content>
      Content
    </template>
  </layout>
</div>
</template>

<script>
import Layout from './Layout.vue'
import Album from './Album.vue'
export default {
  components: {
    Layout,
    Album
  },

  // setup(props) {

  // },
  data() {
    return {
      albums: [],
    }
  },

  async created() {
    this.$store.dispatch('albums/fetchAlbums')
  },

  // computed: {
  //   albums() {
  //     console.log(this.$store.state.albums.all);
  //     return this.$store.state.albums.all
  //   }
  // },

  mounted() {
    setTimeout(() => {
      this.albums = this.$store.state.albums.all
    }, 200)
  },

}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
