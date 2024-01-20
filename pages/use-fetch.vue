<template>
    <div>
        <h1>Use Fetch</h1>
        <button @click="refresh">Recarregar Dados</button>
        <div v-if="pending">Carregando...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <pre v-else>
            {{ charmander }}
        </pre>

        <select v-model="selectPokemon" name="pokemon">
            <option value="charmander">Charmander</option>
            <option value="bulbasaur">Bulbasaur</option>
            <option value="pikachu">Pikachu</option>
        </select>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const selectPokemon = ref('charmander')
const endpoint = computed(() => `https://pokeapi.co/api/v2/pokemon/${selectPokemon.value}`)

const { data: charmander, pending, error, refresh} = await useFetch(endpoint, {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    transform: (data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    })
})
</script>

<style scoped>

</style>