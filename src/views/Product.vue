<template>
    <div class="product">
        <Navbar />
        <Title :cartTot="cartTotal.cartTot" />
        <div class="container-fluid">
            <div class="row mainContainer">
                <div class="col-md-8 cardcon">
                    <div class="cardContainer">
                        <div class="container-card d-flex flex-wrap">
                            <div class="pl-3" v-for="card in datas" :key="card.id" @click="clickCard(card)">
                                <Card  :image="card.image" :name="card.name" :price="card.price" :type="card.type" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 cartcol">
                    <div class="cartContainer">

                        <div class="cartfill" v-show="!isHidden">

                            <div class="cartfilltwo">
                                <div>
                                    <div class="cartright">
                                        <img class="card float-left shadow" :src="{image}" :alt="{name}">
                                        <h1 class="ml-2 pt-2">{{cart.name}}</h1>
                                        <div class="btn-group me-2 " role="group" aria-label="First group">
                                            <button type="button" class="btn btn-primary">+</button>
                                            <button type="button" class="btn btn-light disabled">0</button>
                                            <button type="button" class="btn btn-warning"
                                                @click="clickCard()">-</button>
                                        </div>
                                        <button class="btn btn-danger float-right"> X </button>
                                    </div>
                                </div>
                                <div class="containerTotalBuy ">
                                    <h4 class="float-right">Price</h4>
                                    <h4 class="float-left">Total</h4>
                                    <p class="pt-5">*Harga Belum Termasuk PPN</p>

                                    <button class="btn btn-success col-md-12">Checkout</button>
                                    <button class="btn btn-outline-danger col-md-12 mt-2">Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div class="empty" v-show="isHidden">


                            <img class="imgCup" src="../assets/food-and-restaurant.png" alt="">
                            <h2>You cart is empty</h2>
                            <p class="txtCart">Please add some items from menu</p>


                        </div>

                    </div>


                </div>

            </div>
        </div>



    </div>
</template>

<script>
    import axios from 'axios';
    import Navbar from '../components/Navbar.vue'
    import Title from '../components/Title.vue'
    import Card from '../components/Card.vue'

    export default {
        name: 'product',
        data() {
            return {
                datas: 'null',
                sort: 10000,
                isHidden: true,
                cart: [],
                cartTotal: [],


            }
        },
        components: {
            Navbar,
            Title,
            Card,

        },

        methods: {
            erese() {
                this.isHidden = !this.isHidden
            },

            clickCard(value) {
                this.erese()
                this.cart.push(value)

            },


        },
        mounted() {
            axios.get('http://localhost:4000/product')
                .then(res => {
                    this.datas = res.data.result
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
</script>


<style scoped>
    .mainContainer {

        display: flex;
        flex-wrap: wrap;

    }

    .cardcon {
        width: 100%;
        height: 100%;
    }

    /* cart */
    .cartContainer {
        background-color: #fff;
        box-shadow: -1px 7px -20px 0px #888;
        position: fixed;
        margin-top: 100px;
        margin-left: 84px;
        width: 100%;
        height: 100%;
    }


    .empty img {
        position: absolute;
        right: 81%;
    }

    .empty h1 {
        font-size: 40px;
        font-weight: normal;
    }

    .empty>h2 {
        position: absolute;
        margin-top: 200px;
        right: 80%;
    }

    .empty>p {
        position: absolute;
        margin-top: 240px;
        right: 78%;
    }

    .txtCart {
        color: rgb(199, 191, 191);
        font-size: 1.2rem;
    }

    p {
        font-weight: bolder;
        font-size: 150%;
        line-height: 15px;
    }

    .cartfilltwo {
        height: 120px;
        width: 520px;
        position: absolute;
        right: 72%;
    }

    .cartfilltwo img {
        height: 100px;
        width: 100px;
        margin-top: 10px;

    }

    .containerTotalBuy {
        margin-top: 540px;
        padding-left: 0px;

    }

    .container-card {
        margin-left: 180px;
        margin-top: 90px;
    }


    @media (max-width: 576px) {
        .container-card {
            margin-left: 50px;
            margin-top: 60px;
        }
    }

    @media (max-width: 768px) {

        .container-card {
            margin-left: 0px;
            margin-top: 60px;
        }

        .cartContainer {
            display: none;
        }

    }

    @media (max-width: 992px) {
        .cartContainer {
            display: none;
        }

        .container-card {
            margin-left: 20px;
            margin-top: 50px;
        }
    }


    @media (max-width: 1200px) {}
</style>