<template>
  <div class="product container col px-0 ">
    <div class="row">
      <Navbar />

      <div class="col-sm-11 col-md-11 col-lg-11 pl-0">

        <Title :cartTot="cart.length" v-on:found="serach" />
        <main class="col-sm-12 col-md-12 col-lg-12">
          <div class="row mainContainer">
            <div class="px-0 col-sm-8 col-md-8 col-lg-8 cardcon ">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 mx-1">
                
                <div class="col mb-4 menu" v-for="cards in datas" :key="cards.id" >
                  <Card 
                  :name="cards.name" 
                  :price="Number(cards.price)" 
                  :image="cards.image" 
                  :type="cards.type" 
                  :prod="cards"
                  @addProd="addCart"
                  />
                  
                </div>
              </div>
            </div>

            <div class="px-0 col-sm-4 col-md-4 col-lg-4 cartcol ">
              <div class="cartContainer ">
                <div class="empty" v-if="cart.length <= 0 && cart">
                  <img class="imgCup" src="../assets/food-and-restaurant.png" alt="" />
                  <h2>You cart is empty</h2>
                  <p class="txtCart">Please add some items from menu</p>
                </div>
                <div class="cartfill" v-else>
                  <div class="container col" v-for="carts in cart" :key="carts.id">
                    <Cart :name="carts.name" :image="carts.image" :price="carts.price" />
                  </div>
                  <div class="cart-order">
                    <div class="order-total mt-5">
                      <h5>
                        <!-- Total Rp. {{totalprice}} -->
                      </h5>
                    </div>
                    <p class="pt-2">*Harga Belum Termasuk PPN</p>
                    <button class="btn btn-primary btn-block" v-b-modal.modal-1>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <b-modal id="modal-1" title="Checkout" hide-footer>
              <!-- <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Nomer Invoice: </td>
                    <td>{{idInvoice}}</td>
                  </tr>
                  <tr>
                    <td>Nama Cashier: </td>
                    <td>Pevita</td>
                  </tr>
                  <tr v-for="invoiceFood in cart" :key="invoiceFood.id">
                    <td>{{invoiceFood.name}}</td>
                    <td>Rp {{invoiceFood.price}}</td>
                  </tr>
                  <tr>
                    <td>Ppn</td>
                    <td>{{ppn}}</td>
                  </tr>
                  <tr>
                    <td>Total Bayar </td>
                    <td>Rp {{calculate}}</td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td>
                      <b-form-select id="input-3" :options="payment" required></b-form-select>
                    </td>
                  </tr>
                </tbody>
              </table>
              -->
              <button class="btn btn-block btn-primary checkoutbtn" @click="paymentCheckout()">Pay</button>
            </b-modal>
          </div>
        </main>

      </div>



    </div>

  </div>
</template>

<script>
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import Title from "../components/Title.vue";
  import Card from "../components/Card.vue";
  import Cart from "../components/Cart.vue"

  export default {
    name: "product",
    data() {
      return {
        datas: null,
        sort: 10000,
        add: 1,
        cart: [],


        idInvoice: 0,
        ppn: 0,
        payment: [{ text: "Cash",value: 1}, {text: "Debit",value: 2}],

        formCheckout:{
          
          
          cashier: 'Pevita',
          ppn: null,
          // totalprice: null,

        } 
      };

    },
    components: {
      Navbar,
      Title,
      Card,
      Cart,
    },

    methods: {
      
      
      serach(value) {
        axios
          .get(process.env.VUE_APP_URL + "product/search/?search=" + value)
          .then((res) => {
            if (res.data.result == "tidak ada data di table product") {
              this.datas = [];
            } else {
              this.datas = res.data.result;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },

      addCart(prod){
        
        let indexItem
        let isExist = this.cart.filter((cards, index)=>{
        console.log("masuk");
          if(cards.prod.id == Number(prod.id)){
            indexItem = index
            return true
          }else{
            return false
          }
        })
        if(isExist.length){
          this.cart[indexItem].qty++
        }else{
          this.cart.push({prod :prod, qty: 1})
        }
      }

      // addFood() {
      //   this.add++;
      // },

      // changeqty(id, mode){
      //   let result = this.cart.find((res)=>{
      //     if(res.id == id){
      //       return res.id
      //     }

      //   })
      //   if(result){
      //     for(let i = 0; i < this.cart.length; i++){
      //       if( this.cart[i].id == id ){
      //         const cartObject = {
      //           ...this.cart[i],
      //           count: mode === 'PLUS' ? this.cart[i].count + 1 : this.cart[i].count - 1,
      //         }
      //         console.log("Masuk");

      //         this.$set(this.cart, i, cartObject)
      //       }

      //     }
      //   }
      // },

      // generateKey(key1, key2){
      //   return `${key1}-${key2}`
      // },



      // checkoutPayment() {
      //   this.idInvoice = Math.round(Math.random() * 10000 + 1)
      //   this.ppn = this.totalprice * (10 / 100)
      // },

      
      // paymentCheckout(){
        
      //   this.formCheckout.cashier = this.cashier
      //   this.formCheckout.ppn = this.ppn
      //   this.formCheckout.totalprice = this.calculate
      //   axios({
      //     method: "post",
      //     url: process.env.VUE_APP_URL + "history",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     data: JSON.parse(JSON.stringify(this.formCheckout)),
          
      //   }) 
      //   .then((res)=> {
      //     console.log(res.data.result);
      //   })
      //   .catch((err)=>{
      //     console.log(err);
      //   })
      // }

   
    },

    mounted() {
      axios
        .get(process.env.VUE_APP_URL + "product")
        .then((res) => {
          this.datas = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    computed: {
      // totalprice() {
      //   let total = 0
      //   for (const res of this.cart) {
      //     total += Number(res.price)
      //   }
      //   return total
      // },
      // calculate() {
      //   let total = this.ppn + this.totalprice
      //   return total
      // }
    }
  };
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

  /* .cartright h1 {
    padding-right: 0;
  } */


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