<template>
    <div>
        <header>
            <div class="continer-fluid">
                <div class="header">
                    <div class="  col-md-8 foodItems">
                        <h1>Food Items</h1>


                        <div class="searchide" v-if="!isHidden">
                           
                            <div class="range">
                                <input type="range" style="width: 260px; margin-right:90px " min="0" max="100" v-model="max">
                            </div>
                            
                            <div class="input-group mb-0">
                                
                                <input type="search" class="form-control" placeholder="Find" aria-label="Find" aria-describedby="button-addon2" v-model="find" v-on:keyup="sendtoparent" >

                            </div>
                        </div>

                        <div class="searchshow ml-3" v-on:click="isHidden = !isHidden">
                            <img class="searchIcon" src="../assets/magnifying-glass.png" alt="search">
                        </div>

                    </div>
                    <div class="  col-md-4 cartItems">
                        <h1 class="cartText">Cart <span class="badge badge-pill badge-info">{{cartTot}}</span></h1>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Title",
        data() {
            return {
                isHidden: true,
                find: '',
            }
        },
        props: {
            cartTot: {
                type: Number,
                required: true,
            },

        },
        methods: {
            sendtoparent(){
                this.$emit("found", this.find);
            }
        }

    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 100px;
        display: flex;
        margin-left: 100px;
        position: fixed;
        z-index: 999;

    }

    .header .searchIcon {
        margin-right: 20px;
    }

    .foodItems h1 {
        margin: auto;
    }

    .cartItems h1 {
        margin: auto;
    }

    .cartItems img {
        margin-left: 0;
    }

    .foodItems {
        background-color: #fff;
        box-shadow: -1px 7px -20px 0px #888;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
    }

    .cartItems {
        background-color: #fff;
        box-shadow: 1px 0px 5px 0px #888;
        width: 100%;
        text-align: center;
        align-items: center;
        font-size: 2.3rem;
    }

    .cartText {
        padding-top: 20px;
    }

    @media (max-width: 576px) {
        .header {
            width: 100%;
            height: 70px;
            margin-left: 100px;
            position: fixed;
            z-index: 999;

        }

        .foodItems {
            box-shadow: -1px 7px -20px 6px #888;
        }

        .header .searchIcon {
            margin-right: 90px;
            height: 25px;
        }

        .foodItems h1 {
            text-align: center;
            font-size: 20px;
        }


        .cartItems {
            width: 100%;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 20px;
            padding-bottom: 10px;
        }

        .header .cartItems {
            position: fixed;
            bottom: 0;
        }

        .cartItems {
            padding: 0;
            margin: 0;
            left: 0px;
            position: absolute;
            bottom: 0;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 20px;
        }
    }

    @media (max-width: 768px) {
        .header {
            width: 100%;
            height: 70px;
            margin-left: 50px;
            position: fixed;
            z-index: 999;
        }

        .foodItems {
            box-shadow: -1px 7px -20px 6px #888;
        }

        .header .searchIcon {
            margin-right: 90px;
            height: 25px;
        }

        .foodItems h1 {
            text-align: center;
            font-size: 25px;
        }


        .cartItems {
            width: 100%;        }

        .cartItems h1 {
            margin: auto;
            font-size: 20px;
            padding-bottom: 10px;
        }

        .header .cartItems {
            position: fixed;
            bottom: 0;
        }

        .cartItems {
            padding: 0;
            margin: 0;
            left: 0px;
            position: absolute;
            bottom: 0;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 25px;
        }
    }

    @media (max-width: 992px) {
        .header {
            width: 100%;
            height: 70px;
            margin-left: 50px;
            position: fixed;
            z-index: 999;
        }

        .foodItems {
            box-shadow: -1px 7px -20px 6px #888;
        }

        .header .searchIcon {
            margin-right: 90px;
            height: 25px;
        }

        .foodItems h1 {
            text-align: center;
            font-size: 25px;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 25px;
        }


    }

    @media (max-width: 992px) {
        .header {
            width: 100%;
            height: 70px;
            margin-left: 0px;
            padding-left: 70px;
            position: fixed;
            z-index: 999;
        }
        

        .foodItems {
            box-shadow: -1px 7px -20px 6px #888;
        }

        .header .searchIcon {
            margin-right: 90px;
            height: 25px;
        }

        .foodItems h1 {
            text-align: center;
            font-size: 25px;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 25px;
        }
    }

    @media (min-width: 1200px) {
        .header {
            width: 100%;
            height: 100px;
            margin-left: 0px;
            padding-left: 70px;
            position: fixed;
            z-index: 999;
        }
         .foodItems {
            box-shadow: -1px 7px -20px 6px #888;
        }

        .header .searchIcon {
            margin-right: 90px;
            height: 25px;
        }

        .foodItems h1 {
            text-align: center;
            font-size: 40px;
        }

        .cartItems h1 {
            margin: auto;
            font-size: 40px;
        }
    }
</style>