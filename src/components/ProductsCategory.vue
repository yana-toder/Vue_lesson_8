<template>
    <div class="container">
        <a
            v-for="product in productsData"
            :key="product.id"
            class="product"
            :class="{ active: $store.getters.getCurrentCategory === product.category }"
            @click="$emit('getCategory', product.category)"
        >
            <img :src="product.image" alt="image" />
            <h2>{{ product.title }}</h2>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProductsCategory',
    emits: ['getCategory'],
    props: {
        productsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    background-color: gray;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.product {
    cursor: pointer;
    width: 220px;
    height: 200px;
    justify-content: center;
    border-radius: 10%;
    border: 2px solid rgb(50, 50, 129);
    background-color: #fff;
    padding: 10px;
    margin: 10px;
}
.active {
    border: 3px solid rgb(243, 65, 65);
}
</style>
