<template>
  <div class="card-wrapper">
    <card v-for="poke in pokemon" 
      :key="poke.id" 
      @click="fetchEvolution(poke.id, poke.index)"
      :class="{ opace: selectedIndex !== null && poke.index !== selectedIndex}"
    >
      <template v-slot:title>
        {{poke.name}}
      </template>
      <template v-slot:content>
        <img :src="poke.sprite"/>
      </template>
      <template v-slot:description>
        <div v-for="type in poke.types" :key="type">
          {{type}}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const STARTER_IDS = [1,25,4,7]
import Card from './Card.vue'
export default {
  components : {
    card: Card
  },
  data () {
    return {
      pokemon: [],
      selectedIndex: null,
    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    async fetchEvolution (pokemonId, index) {
      this.selectedIndex = index
      if((pokemonId - STARTER_IDS[index] ) < 2) {
        const resp = await window.fetch(`${api}/${pokemonId+1}`)
        const data = await resp.json()
        const result = {
          id: data.id,
          index: index,
          name: data.name,
          sprite: data.sprites.other['official-artwork'].front_default,
          types: data.types.map(type => type.type.name),
        }
        this.pokemon[index] = result
      }
    },
    async fetchData() {
      const response = await Promise.all(STARTER_IDS.map(id => window.fetch(`${api}/${id}`)))
      const data = await Promise.all(response.map(resp => resp.json()))
      this.pokemon = await Promise.all(data.map((dt,i )=> ({
        id: dt.id,
        index: i,
        name: dt.name,
        sprite: dt.sprites.other['official-artwork'].front_default,
        types: dt.types.map(type => type.type.name),
      })))
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  display: flex;
}
img {
  width: 100%;
}
.opace {
   opacity: .5;
}
</style>