<template>
    <div class="container-manager">
        <cars-filter />
        <div v-if="getErrorMassage">{{ getErrorMassage }}</div>
        <cars-list :cars-list="filteredCarsList" />
    </div>
</template>

<script>
import CarsFilter from './CarsFilter.vue'
import CarsList from './CarsList.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CarsManager',
    components: {
        CarsList,
        CarsFilter,
    },
    computed: {
        ...mapGetters(['getCarsList', 'filteredCarsList', 'getErrorMassage']),
    },

    methods: {
        ...mapActions(['loadCarsList']),
    },
    created() {
        this.loadCarsList()
    },
}
</script>

<style lang="scss" scoped>
.container-manager {
    padding-top: 40px;
    display: grid;
    grid-template-columns: 20% 80%;
}
</style>
