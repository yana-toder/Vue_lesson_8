import { createStore } from 'vuex'
import productsCategory from '@/components/data/productsCategory.json'
import products from '@/components/data/products.json'
//========================================================================================================================================================
import carsList from '@/components/data/carsList.json'
import { getUniqueVal } from './helper.js'
export default createStore({
    state: {
        productsCategory: ['ok'],
        products: [],
        currentCategory: null,
        //========================================================================================================================================================
        //Task2========================================================================================================================================================
        carsList: ['ok'],
        autoTypeSelectVal: null,
        bodyTypeSelectVal: [],
        brandSelectVal: null,
        modelSelectVal: null,
        fromYearSelectVal: null,
        toYearSelectVal: null,
        errorMessage: null,
    },
    getters: {
        getProductsCategory: ({ productsCategory }) => productsCategory,
        getProductsList: ({ products }) => products,
        getFilteredProductListByCategory: ({ products, currentCategory }) => {
            if (!currentCategory) return products
            else return products.filter((product) => product.category === currentCategory)
        },
        getCurrentCategory: ({ currentCategory }) => currentCategory,
        //========================================================================================================================================================
        //Task2========================================================================================================================================================
        getCarsList: ({ carsList }) => carsList,

        autoTypesList: (state) => getUniqueVal(state.carsList, 'autoType'),
        bodyTypesList: (state) => getUniqueVal(state.carsList, 'bodyType'),
        brandsList: (state) => getUniqueVal(state.carsList, 'brand'),
        modelsList: (state) => getUniqueVal(state.carsList, 'model'),
        yearsList: (state) => getUniqueVal(state.carsList, 'year'),

        getAutoTypeSelectVal: ({ autoTypeSelectVal }) => autoTypeSelectVal,
        getBodyTypeSelectVal: ({ bodyTypeSelectVal }) => bodyTypeSelectVal,
        getBrandSelectVal: ({ brandSelectVal }) => brandSelectVal,
        getModelSelectVal: ({ modelSelectVal }) => modelSelectVal,
        getFromYearSelectVal: ({ fromYearSelectVal }) => fromYearSelectVal,
        getToYearSelectVal: ({ toYearSelectVal }) => toYearSelectVal,
        getErrorMassage: ({ errorMessage }) => errorMessage,

        //------------
        filteredCarsList: (state) => {
            let filteredCars = state.carsList.filter((car) => {
                const autoTypeCar = !state.autoTypeSelectVal || car.autoType === state.autoTypeSelectVal
                const bodyTypeCar = !state.bodyTypeSelectVal.length || state.bodyTypeSelectVal.includes(car.bodyType)
                const brandCar = !state.brandSelectVal || car.brand === state.brandSelectVal
                const modelCar = !state.modelSelectVal || car.model === state.modelSelectVal
                const fromYearCar = !state.fromYearSelectVal || car.year >= state.fromYearSelectVal
                const toYearCar = !state.toYearSelectVal || car.year <= state.toYearSelectVal

                return autoTypeCar && bodyTypeCar && brandCar && modelCar && fromYearCar && toYearCar
            })

            if (filteredCars.length === 0) {
                return (state.errorMessage = 'Список порожній')
            } else state.errorMessage = null

            return filteredCars
        },
    },
    mutations: {
        setProductsCategory(state, list) {
            state.productsCategory = list
        },
        setProductsList(state, list) {
            state.products = list
        },
        selectedCategory(state, category) {
            state.currentCategory = category
        },
        //========================================================================================================================================================

        //Task2========================================================================================================================================================
        setCarsList(state, list) {
            state.carsList = list
        },
        setSelectedAutoType(state, type) {
            state.autoTypeSelectVal = type
        },
        setSelectedBodyType(state, bodyType) {
            if (state.bodyTypeSelectVal.includes(bodyType))
                state.bodyTypeSelectVal = state.bodyTypeSelectVal.filter((item) => item !== bodyType)
            else state.bodyTypeSelectVal.push(bodyType)
        },
        setSelectedBrand(state, brand) {
            state.brandSelectVal = brand
        },
        setSelectedModel(state, model) {
            state.modelSelectVal = model
        },
        setSelectedFromYear(state, year) {
            state.fromYearSelectVal = year
        },
        setSelectedToYear(state, year) {
            state.toYearSelectVal = year
        },
    },
    actions: {
        loadProductsCategory({ commit }) {
            commit('setProductsCategory', productsCategory)
        },
        loadProductsList({ commit }) {
            commit('setProductsList', products)
        },
        selectedCategory({ commit }, category) {
            commit('selectedCategory', category)
        },
        //========================================================================================================================================================
        //Task2=====================
        loadCarsList({ commit }) {
            commit('setCarsList', carsList)
        },
        selectedAutoType({ commit }, type) {
            commit('setSelectedAutoType', type)
        },
        selectedBodyType({ commit }, type) {
            commit('setSelectedBodyType', type)
        },
        selectedBrand({ commit }, brand) {
            commit('setSelectedBrand', brand)
        },
        selectedModel({ commit }, model) {
            commit('setSelectedModel', model)
        },
        selectedFromYear({ commit }, year) {
            commit('setSelectedFromYear', year)
        },
        selectedToYear({ commit }, year) {
            commit('setSelectedToYear', year)
        },
    },
    modules: {},
})
