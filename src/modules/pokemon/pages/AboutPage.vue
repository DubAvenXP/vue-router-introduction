<template>
    <h1>About Page</h1>
    <hr />
    <h2>{{ name }}</h2>
    <button @click="cambiarNombre()">
        Cambiar nombre
    </button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Pikachu'
        }
    },
    methods: {
        cambiarNombre() {
            this.name = 'Bulbasaur'
        }
    }
};
</script>

<style></style>
