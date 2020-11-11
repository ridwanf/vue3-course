
export const photos = {
  namespaced: true,
  state () {
    return {
      photo: {},
    }
  },

  mutations: {
    setPhoto(state, payload) {
      state.photo = payload
     }
  },

  actions: {
    async fetchPhotosForAlbum (ctx, album){
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
      const data = await res.json()
      ctx.commit('setPhoto', data)
    }
  }
}