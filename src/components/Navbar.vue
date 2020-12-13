<template>
    <div>
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
                    <img v-on:click="hideaddproduct = !hideaddproduct" src="../assets/add.png" alt="">
                </li>
            </ul>
        </nav>
        <div v-if="!hideaddproduct" class="toogle-nav-additems">
            <div class="containershow-additems"></div>
            <div class="form-nav text-left">
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

            </div>

            <!-- <div v-if="!hideaddproduct" class="toogle-nav-additems">
            <div class="containershow-additems"></div>
            <div class="form-nav text-left">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group id="name" label="Name:" label-for="name">
                        <b-form-input id="name" v-model="form.name" type="name" required placeholder="Product Name">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="price" label="Price:" label-for="price">
                        <b-form-input id="price" v-model="form.price" required placeholder="Enter Price"></b-form-input>
                    </b-form-group>

                    <b-form-group id="image" label="Image:" label-for="image">
                        <b-form-input id="image" v-model="form.image" required placeholder="Enter Image"></b-form-input>
                    </b-form-group>
                    <b-form-group id="idcategory" label="Category:" label-for="idcategory">
                        <b-form-input id="idcategory" v-model="form.idcategory" required placeholder="Enter Category">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
                </b-form>

            </div> -->

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
                category : [{text:"Makanan", value:1}, {text:"Minuman", value:2}]

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
        z-index: 5;
        position: absolute;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100px;
        background-color: #fff;
        box-shadow: -1px -7px 20px 0px #888;
        align-items: center;
        text-align: center;
        position: fixed;
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
        height: 800px;
        width: 1800px;
        background-color: rgb(230, 230, 230);
        position: absolute;
        z-index: 3;
        opacity: 90%;
        filter: blur(8px);
    }


    .form-nav {
        position: absolute;
        margin: 150px 0 0 380px;
        align-items: center;
        opacity: 100%;
        padding-left: 150px;
        padding-right: 100px;
        height: 500px;
        width: 1050px;
        z-index: 4;
    }

    

    @media (max-width: 576px) {
        nav {
            height: 70px;
            width: 60px;
            z-index: 999;
        }

        nav img {
            display: none;
        }

        .menu {
            display: block;
            padding-top: 20px;
            padding-left: 25px;
            height: 50px;   
        }
        
    }

    @media (max-width: 768px) {
        nav {
            height: 70px;
            width: 100px;
            z-index: 999;
        }

        nav img {
            display: none;
        }

        .menu {
            display: block;
            padding-top: 20px;
            padding-left: 25px;
            height: 50px;   
        }
    }
    @media (min-width: 768px) {
        nav {
            height: 100%;
            width: 70px;
            z-index: 999;
        }

        nav img {
            width: 40px;
        }

        .menu {
            padding-top: 20px;
            height: 50px;   
        }
    }

     @media (min-width: 992px) {
        nav {
            height: 100%;
            width: 70px;
            z-index: 999;
        }

        nav img {
            width: 40px;
        }

        .menu {
            padding-top: 20px;
            height: 50px;   
        }


        
    }
    
    @media (min-width: 992px) {
       nav {
            height: 100%;
            width: 100px;
            z-index: 999;
        }
    }

</style>