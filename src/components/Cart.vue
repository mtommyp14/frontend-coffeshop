<template>
    <div>
        <div class="cartright">
            <img class="card float-left shadow" :src="image" :alt="name">
            <h1 class="ml-2 pt-2">{name}</h1>
            <div class="btn-group me-2 " role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">+</button>
                <button type="button" class="btn btn-light disabled">{{cartprops}}</button>
                <button type="button" class="btn btn-warning" @click="clickCard()">-</button>
            </div>
            <button class="btn btn-danger float-right"> X </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            image: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            cartprops: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>