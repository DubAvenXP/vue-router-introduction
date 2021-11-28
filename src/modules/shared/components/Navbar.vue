<template>
    <div>
        <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: { id: 85 }}">Pokemon por Id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <CustomLink 
        v-for="link in links" :key="link.to" :link="link" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    data(){
        return {
            links: [
                {
                    name: "Pokemons",
                    to: "pokemon-home"
                },
                {
                    name: "Por Id",
                    to: "pokemon-id",
                    id: 326
                },
                {
                    name: "About",
                    to: "pokemon-about"
                },
                {
                    name: "Dbz-About",
                    to: "dbz-about"
                },
                {
                    name: "Dbz-characters",
                    to: "dbz-characters"
                },
                {
                    name: "Google",
                    to: "https://google.com"
                }
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() =>
            import(/* webpackChunkName: "Link" */ "./CustomLink.vue")
        ),
    },
};
</script>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 20px;
}

/* div .router-link-exact-active {
    color: #42b983;
} */
</style>
