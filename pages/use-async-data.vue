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
const selectPokemon = ref('charmander')

const { data: charmander, pending, error, refresh} = await  useAsyncData("pokemon-info", async () => {
    const [pokemonData, sepeciesData] = await Promise.all([
        $fetch(`https://pokeapi.co/api/v2/pokemon/${selectPokemon.value}`),
        $fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectPokemon.value}`)
    ])

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        habitat: sepeciesData.shape?.name,
        shape: sepeciesData.shape?.name
    }
}, {
    watch: [selectPokemon],
    lazy: true
})
</script>

<style scoped>

</style>