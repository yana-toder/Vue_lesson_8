<template>
    <div>
        <div class="filter">
            <label>
                Тип транспорту
                <select v-model="autoTypeSelect">
                    <option v-for="autoType in autoTypesList" :key="autoType" :value="autoType">
                        {{ autoType }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filter checkbox">
            Тип кузова
            <label v-for="bodyType in bodyTypesList" :key="bodyType">
                {{ bodyType }}
                <input type="checkbox" :value="autoType" @click="selectedOptionBodyType(bodyType)" />
            </label>
        </div>
        <div class="filter">
            <label>
                Марка
                <select v-model="brandSelect">
                    <option v-for="brand in brandsList" :key="brand" :value="brand">
                        {{ brand }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filter">
            <label>
                Модель
                <select v-model="modelSelect">
                    <option v-for="model in modelsList" :key="model" :value="model">
                        {{ model }}
                    </option>
                </select>
            </label>
        </div>
        <div class="filter">
            <label>
                Рік
                <select v-model="fromYearSelect" class="year">
                    <option v-for="year in yearsList" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
                <select v-model="toYearSelect">
                    <option v-for="year in yearsList" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
            </label>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CarsFilter',

    data() {
        return {}
    },

    computed: {
        ...mapGetters([
            'autoTypesList',
            'bodyTypesList',
            'brandsList',
            'modelsList',
            'yearsList',
            'getAutoTypeSelectVal',
            'getBodyTypeSelectVal',
            'getBrandSelectVal',
            'getModelSelectVal',
            'getFromYearSelectVal',
            'getToYearSelectVal',
        ]),

        autoTypeSelect: {
            get() {
                return this.getAutoTypeSelectVal
            },
            set(val) {
                this.selectedAutoType(val)
            },
        },
        brandSelect: {
            get() {
                return this.getBrandSelectVal
            },
            set(val) {
                this.selectedBrand(val)
            },
        },
        modelSelect: {
            get() {
                return this.getModelSelectVal
            },
            set(val) {
                this.selectedModel(val)
            },
        },
        fromYearSelect: {
            get() {
                return this.getFromYearSelectVal
            },
            set(val) {
                this.selectedFromYear(val)
            },
        },
        toYearSelect: {
            get() {
                return this.getToYearSelectVal
            },
            set(val) {
                this.selectedToYear(val)
            },
        },
    },
    methods: {
        ...mapActions([
            'selectedAutoType',
            'selectedBodyType',
            'selectedBrand',
            'selectedModel',
            'selectedFromYear',
            'selectedToYear',
        ]),

        selectedOptionBodyType(bodyType) {
            this.selectedBodyType(bodyType)
        },
    },
}
</script>

<style lang="scss" scoped>
.filter {
    margin-bottom: 20px;
    background-color: #d1c1c1;
    padding: 10px;
}
.checkbox {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.year {
    margin-right: 10px;
}
</style>
