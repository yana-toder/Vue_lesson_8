<template>
    <div class="container-cars">
        <a v-for="car in carsList" :key="car.id" :href="car.link" class="car">
            <div class="image-container">
                <img :src="car.image" alt="image" />
            </div>
            <div>
                <h2>{{ car.name }}</h2>
                <div class="price">{{ car.price }} 💲</div>
                <div class="wrap-description">
                    <div>🛣️ {{ car.mileage }} тис. км</div>
                    <div>🏙️ {{ car.location }}</div>
                    <div>⛽ {{ car.petrol }}</div>
                    <div>⚙️ {{ car.transmission }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'CarsList',

    props: {
        carsList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.container-cars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 11px;
    grid-row-gap: 15px;

    h2 {
    }
}
.car {
    display: grid;
    grid-template-columns: 60% 40%;
    height: 250px;
    width: 600px;
    background-color: #f9f1e7;
    border: 1px solid gray;
    text-decoration: none;
    color: #3a3a3a;
}
.price {
    flex-wrap: wrap;
    font-size: 22px;
    color: #e97171;
    font-weight: 900;
    margin-bottom: 25px;
}
.wrap-description {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-items: start;
}
.image-container {
    width: 350px;
    height: 250px;
    img {
        width: 350px;
        height: 250px;
    }
}
</style>
