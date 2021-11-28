<template>
    <a
        v-if="isExternalLink"
        :href="link.to"
        target="__blank"
        class="normal-link"
    >
        {{ link.name }}
    </a>
    <router-link
        v-else
        :to="{ name: link.to, params: { id: link.id } }"
        v-slot="{ isActive }"
    >
        <a :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith("http");
        },
    },
};
</script>

<style scoped>
.is-active {
    color: #42b983;
}
.normal-link {
    color: #c6c5c7;
}
</style>
