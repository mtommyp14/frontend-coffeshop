<template>
    <div class="col-sm-1 col-md-1 col-lg-1 px-0 bg-white">
        <nav>
            <ul>
                <li>
                    <img class="menu" src="../assets/menu.png" alt="">
                </li>
                <li>
                    <router-link to="/product"> <img src="../assets/fork.png" alt=""> </router-link>
                </li>
                <li>
                    <router-link to="/history"><img src="../assets/clipboard.png" alt=""> </router-link>
                </li>
                <li>
                    <img v-on:click="hideaddproduct = !hideaddproduct" v-b-modal.modal-1 src="../assets/add.png" alt="">
                </li>
                <li>
                    <router-link to="/settings">
                        <b-icon-gear font-scale="3" class="mt-4" variant="secondary"></b-icon-gear>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div v-if="!hideaddproduct" class="toogle-nav-additems">
            <div class="form-nav text-left">
                <div>
                   
                    <b-modal id="modal-1" hide-footer title="BootstrapVue">
                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group label="Name:" label-for="name">
                                <b-form-input v-model="form.name" type="name" required placeholder="Product Name">
                                </b-form-input>
                            </b-form-group>

                            <b-form-group label="Price:" label-for="price">
                                <b-form-input v-model="form.price" required placeholder="Enter Price"></b-form-input>
                            </b-form-group>

                            <b-form-group label="Image:" label-for="image">
                                <b-form-input v-model="form.image" required placeholder="Enter Image"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Category:" label-for="idcategory">
                                <b-form-select v-model="form.idcategory" :options="category">
                                </b-form-select>
                            </b-form-group>

                            <b-button type="submit" variant="primary">Submit</b-button>
                            <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
                        </b-form>
                    </b-modal>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Navbar",
        data() {
            return {
                hideaddproduct: true,
                form: {
                    name: '',
                    price: '',
                    image: '',
                    idcategory: null,
                },
                category: [{
                    text: "Makanan",
                    value: 1
                }, {
                    text: "Minuman",
                    value: 2
                }]

            }
        },
        methods: {
            onSubmit() {
                const dataProduct = {
                    name: this.form.name,
                    price: this.form.price,
                    image: this.form.image,
                    idcategory: this.form.idcategory
                }
                axios({
                        method: 'post',
                        url: 'http://localhost:9000/product',
                        headers: {
                            "Content-type": "application/json"
                        },
                        data: dataProduct
                    })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err);
                    })


            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.name = ''
                this.form.price = ''
                this.form.image = ''
                this.form.idcategory = ''

                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        },

        mounted() {
            axios.post(process.env.VUE_APP_URL + 'product')
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
    nav ul,
    li {
        list-style: none;
    }

    nav {
        margin: 0;
        padding: 0;
        background-color: #fff;
        align-items: center;
        text-align: center;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    nav img {
        padding-top: 40px;
        padding-left: 0px;
    }

    .containershow-additems {
        margin-left: 100px;
        margin-top: 100px;
        background-color: rgb(230, 230, 230);
        opacity: 90%;
        filter: blur(8px);
    }

    .toogle-nav-additems {
        position: absolute;
        z-index: 10;
        margin-left: 200px;

    }

    /* 
    .form-nav {
        margin: 150px 0 0 380px;
        align-items: center;
        opacity: 100%;
        padding-left: 150px;
        padding-right: 100px;
        z-index: 999;
    } */
</style>