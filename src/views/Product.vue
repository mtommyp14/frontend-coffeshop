<template>
    <div class="product">
        <Navbar />
        <Title :cartTot="cart.length" v-on:found="serach"/>
        <div class="container-fluid">
            <div class="row mainContainer">
                <div class="col-md-8 cardcon">
                    <!-- <div class="sortsearch">
                            <div class="range">
                                <input type="range" style="width: 260px; margin-right:90px " min="0" max="100" v-model="max">
                            </div>
                            
                            <div class="input-group mb-0">
                                
                                <input type="text" class="form-control" placeholder="Find" aria-label="Find" aria-describedby="button-addon2">
                                
                                <button class="btn btn-outline-secondary ml-2 float-right" type="button"
                                    id="button-addon2">Search</button>

                            </div>
                    </div> -->

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


                        <div class="cartfill" v-if="cart.length>=0">

                            <div class="cartfilltwo">
                                <div class="testcart d-flex flex-wrap" v-for="(cartright, index) in cart"
                                    :key="cartright.id">
                                    <div class="cartright ">
                                        <img class="card float-left shadow" :src="cartright.image" :alt="cartright">
                                        <h1 class="ml-2 pt-2 float-left mr-2 ml-3">{{cartright.name}}</h1>
                                        <div>
                                            <div class="btn-group me-2" role="group" aria-label="First group">
                                                <button type="button" class="btn btn-primary"
                                                    v-on:click="addFood()">+</button>
                                                <button type="button" class="btn btn-light disabled">{{add}}</button>
                                                <button type="button" class="btn btn-warning"
                                                    @click="clickCard()">-</button>
                                                <div>
                                                    <button class="btn btn-danger buttonclose "
                                                        v-on:click="cart.splice(index,1)"> X</button>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="containerTotalBuy ">
                                    <h4 class="float-right">Price</h4>
                                    <h4 class="float-left">Total</h4>
                                    <p class="pt-5">*Harga Belum Termasuk PPN</p>

                                    <div>
                                        <b-button id="show-btn" variant="success"
                                            @click="$bvModal.show('bv-modal-example')">Checkout</b-button>

                                        <b-modal id="bv-modal-example" hide-footer>
                                            <template #modal-title>
                                                ADD ITEMS
                                            </template>
                                            <div class="d-block text-center">
                                                <!-- <b-form @submit="onSubmit">
                                                    <b-form-group label="Name:" label-for="name">
                                                        <b-form-input v-model="history.cashier" type="name" required
                                                            placeholder="Product Name">
                                                        </b-form-input>
                                                    </b-form-group>

                                                    <b-form-group label="Price:" label-for="price">
                                                        <b-form-input v-model="form.price" required
                                                            placeholder="Enter Price"></b-form-input>
                                                    </b-form-group>

                                                    <b-form-group label="Image:" label-for="image">
                                                        <b-form-input v-model="form.image" required
                                                            placeholder="Enter Image"></b-form-input>
                                                    </b-form-group>
                                                    <b-form-group label="Category:" label-for="idcategory">
                                                        <b-form-select v-model="form.idcategory" :options="category">
                                                        </b-form-select>
                                                    </b-form-group>



                                                    <b-button type="submit" variant="primary">Submit</b-button>
                                                    <b-button class="ml-2" type="reset" variant="danger">Reset
                                                    </b-button>
                                                </b-form> -->
                                            </div>
                                            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">
                                                Close Me</b-button>
                                        </b-modal>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="empty" v-else>
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
                cart: [],
                add: 1,
            }
        },
        components: {
            Navbar,
            Title,
            Card,

        },

        methods: {
            clickCard(value) {
                this.cart.push(value)
            },
            addFood() {
                this.add++
            },
            serach(value){
                axios.get(process.env.VUE_APP_URL + 'product/search/?search=' + value)
                .then(res => {
                    if(res.data.result== 'tidak ada data di table product'){
                    this.datas=[]
                    }else{
                        this.datas = res.data.result
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }

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

    /* .sortsearch{
        position: absolute;
        margin: 800px 110px 300px;
        height: 200px;
        width: 200px;
        z-index: 8;
    } */

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

    }

    .container-card {
        margin-left: 180px;
        margin-top: 90px;
    }

    .cartright {
        margin: 0 20px 0 20px;
    }

    .cartright h1 {
        padding-right: 0;
    }

    .buttonclose {

        margin-left: 200px;
        position: absoluteS;
        margin: -0px 0 0 30px;

    }

    .testcart {
        width: 100%;
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

        cart .cartContainer {
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
            margin-left: 85px;
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

    @media (min-width: 1200px) {

        .container-card {
            margin-left: 160px;
            margin-top: 100px;
        }

        /* cart */
        .cartContainer {
            background-color: #fff;
            box-shadow: -1px 7px -20px 0px #888;
            position: fixed;
            margin-top: 100px;
            margin-left: 10px;
            padding-top: 10px;
            width: 100%;
            height: 100%;
        }


        .empty img {
            position: absolute;
            right: 80%;
        }

        .empty h1 {
            font-size: 10px;
            font-weight: normal;
        }

        .empty>h2 {
            position: absolute;
            margin-top: 200px;
            right: 79%;
            font-size: 30px;
        }

        .empty>p {
            position: absolute;
            margin-top: 240px;
            right: 78%;
        }

        .txtCart {
            color: rgb(199, 191, 191);
            font-size: 1rem;
        }


    }
</style>