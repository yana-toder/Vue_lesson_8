<template>
    <products-category :products-data="getProductsCategory" @get-category="selectCategoryHandler" />
    <products-list :products-data="getFilteredProductListByCategory" />
</template>

<script>
import ProductsCategory from '@/components/ProductsCategory.vue'
import ProductsList from '@/components/ProductsList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductsManager',
    components: {
        ProductsCategory,
        ProductsList,
    },
    computed: {
        ...mapGetters(['getProductsCategory', 'getFilteredProductListByCategory']),
    },

    methods: {
        ...mapActions(['loadProductsCategory', 'loadProductsList', 'selectedCategory']),

        selectCategoryHandler(category) {
            this.selectedCategory(category)
        },
    },
    created() {
        this.loadProductsCategory()
        this.loadProductsList()
    },
}
</script>

<style lang="scss" scoped></style>
