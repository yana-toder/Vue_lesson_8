<template>
    <products-manager />
    <cars-manager />
</template>

<script>
import ProductsManager from '@/components/ProductsManager.vue'
import CarsManager from '@/components/task2/CarsManager.vue'
export default {
    name: 'App',
    components: {
        ProductsManager,
        CarsManager,
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin-top: 60px;
}
</style>
