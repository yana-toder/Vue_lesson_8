<template>
    <div class="container">
        <a v-for="product in productsData" :key="product.id" class="container-product">
            <img :src="product.image" alt="image" />
            <h2>{{ product.title }}</h2>
            <div class="price">{{ product.price }}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',

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
    flex-wrap: wrap;
    background-color: #bfeefa;
}
.container-product {
    cursor: pointer;
    width: 300px;
    height: 300px;
    justify-content: center;
    border-radius: 10%;
    border: 2px solid rgb(50, 50, 129);
    background-color: #fff;
    padding: 10px;
    margin: 20px;
    @media (any-hover: hover) {
        &:hover {
            border: 3px solid rgb(105, 105, 192);
            transition: border 0.3s ease 0s;
        }
    }
    img {
        width: 180px;
        height: 150px;
    }
    h2 {
        font-size: 18px;
    }
}
.price {
    color: #ee5d5d;
    font-weight: 700;
    font-size: 18px;
}
</style>
