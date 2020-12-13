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
                                <Card :image="card.image" :name="card.name" :price="card.price" :type="card.type" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 cartcol">
                    <div class="cartContainer">

                        <div class="cartfill" v-show="!isHidden">

                            <div class="cartfilltwo">
                                <div v-for="cartright in cart" :key="cartright.id">
                                    <div class="cartright ">
                                        <img class="card float-left shadow" :alt="{name}">
                                        <h1 class="ml-2 pt-2">{{cartright.name}}</h1>
                                        <div class="btn-group me-2 " role="group" aria-label="First group">
                                            <button type="button" class="btn btn-primary">+</button>
                                            <button type="button" class="btn btn-light disabled">0</button>
                                            <button type="button" class="btn btn-warning"
                                                @click="clickCard()">-</button>
                                        </div>
                                        <button class="btn btn-danger float-right" @click="clickDelete(cartright.id)"> X
                                        </button>
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
                cartright: [],
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
            clickDelete(cartright) {
                this.cartright.splice(cartright, 1)
            },



        },
        mounted() {
            axios.get(process.env.VUE_APP_URL + 'product')
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

    .cartfilltwo .cartright {
        margin-left: 0;
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

    @media (min-width: 992px) {
        .container-card {
            margin-left: 100px;
            margin-top: 100px;
        }

        cart 
        .cartContainer {
            box-shadow: -1px 7px -20px 0px #888;
            position: fixed;
            margin-top: 100px;
            margin-left: 85px;
            width: 100%;
            height: 100%;
        }


        .empty img {
            position: absolute;
            right: 75%;
        }

        .empty h1 {
            font-size: 10px;
            font-weight: normal;
        }

        .empty>h2 {
            position: absolute;
            margin-top: 200px;
            right: 75%;
            font-size: 25px;
        }

        .empty>p {
            position: absolute;
            margin-top: 240px;
            right: 71%;
        }

        .txtCart {
            color: rgb(199, 191, 191);
            font-size: 1rem;
        }

    }

    
    @media (max-width: 992px) {

        .container-card {
            margin-left: 80px;
            margin-top: 50px;
        }

        /* cart */
        .cartContainer {
            background-color: #fff;
            box-shadow: -1px 7px -20px 0px #888;
            position: fixed;
            margin-top: 70px;
            margin-left: 10px;
            width: 100%;
            height: 100%;
        }


        .empty img {
            position: absolute;
            right: 75%;
        }

        .empty h1 {
            font-size: 10px;
            font-weight: normal;
        }

        .empty>h2 {
            position: absolute;
            margin-top: 200px;
            right: 75%;
            font-size: 25px;
        }

        .empty>p {
            position: absolute;
            margin-top: 240px;
            right: 71%;
        }

        .txtCart {
            color: rgb(199, 191, 191);
            font-size: 1rem;
        }


    }

    


    @media (min-width: 1200px) {

        .container-card {
            margin-left: 80px;
            margin-top: 100px;
        }

        /* cart */
        .cartContainer {
            background-color: #fff;
            box-shadow: -1px 7px -20px 0px #888;
            position: fixed;
            margin-top: 70px;
            margin-left: 10px;
            width: 100%;
            height: 100%;
        }


        .empty img {
            position: absolute;
            right: 76%;
        }

        .empty h1 {
            font-size: 10px;
            font-weight: normal;
        }

        .empty>h2 {
            position: absolute;
            margin-top: 200px;
            right: 75%;
            font-size: 30px;
        }

        .empty>p {
            position: absolute;
            margin-top: 240px;
            right: 71%;
        }

        .txtCart {
            color: rgb(199, 191, 191);
            font-size: 1rem;
        }


    }

    @media (max-width: 1200px) {

        .container-card {
            margin-left: 120px;
            margin-top: 100px;

        }

        /* cart */
        .cartContainer {
            background-color: #fff;
            box-shadow: -1px 7px -20px 0px #888;
            position: fixed;
            margin-top: 70px;
            margin-left: 10px;
            width: 100%;
            height: 100%;
        }


        .empty img {
            position: absolute;
            right: 76%;
        }

        .empty h1 {
            font-size: 10px;
            font-weight: normal;
        }

        .empty>h2 {
            position: absolute;
            margin-top: 200px;
            right: 75%;
            font-size: 30px;
        }

        .empty>p {
            position: absolute;
            margin-top: 240px;
            right: 71%;
        }

        .txtCart {
            color: rgb(199, 191, 191);
            font-size: 1rem;
        }


    }
</style>