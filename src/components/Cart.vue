<template>
    <div>
        <div class="cartright">
            <div class="row">
                <div class="cart_image col-4 mt-5">
                    <img :src="image" class="img-fluid cart_images">
                </div>
                <div class="cart_content col-8 mt-5">
                    <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="text-left ">{{name}}</h5>
                    <div class="cart_price" >
                        <div class="row">
                            <div class="col-6 value-cart form-group row">
                                <button class="btn btn-danger minbutton" > -
                                </button>
                                <input type="number" class="inputcart"  />
                                <button class="btn btn-success plusbutton" > +
                                </button>
                            </div>
                            <div class="col-6 text-right pt-2">
                                <p>Rp. {{price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: {
            image: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            
            // cartprops: {
            //     type: String,
            //     required: true,
            // }
        }
    }
</script>

<style scoped>
.cardcon {
    width: 100vw;
    height: 100vh;
  }

  .cartContainer {
    background-color: #fff;
    box-shadow: -1px 7px -20px 0px #888;
    width: 100%;
    height: 100%;
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

  .container-card {
    margin-left: 180px;
    margin-top: 90px;
  }

  .cartright h1 {
    padding-right: 0;
  }


  .cart_images {
    height: 100px;
    width: 100px;
  }

  .inputcart {
    width: 50px;
  }

  .checkoutbtn {
    width: 460px;
  }
</style>