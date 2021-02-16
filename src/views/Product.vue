<template>
  <div class="product container col px-0 ">
    <div class="row">
      <Navbar />

      <div class="col-sm-11 col-md-11 col-lg-11 pl-0">

        <Title :cartTot="qty" v-on:found="serach" />
        <main class="col-sm-12 col-md-12 col-lg-12">
          <div class="row mainContainer">
            <div class="px-0 col-sm-8 col-md-8 col-lg-8 cardcon ">
              <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3 mx-1">

                <div class="col mb-4 menu" v-for="cards in datas" :key="cards.id">
                  <Card :name="cards.name" :price="Number(cards.price)" :image="cards.image" :type="cards.type"
                    :prod="cards" @addProd="addCart" />

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
                  <div class="container col">
                    <div class="cartright">
                      <div class="row" v-for="(dataItem, index) in cart"
                        :key="generateKey(dataItem.id, dataItem.count)">
                        <div class="cart_image col-4 mt-5">
                          <img :src="dataItem.image" class="img-fluid cart_images">
                        </div>
                        <div class="cart_content col-8 mt-5">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            v-on:click="cart.splice(index, 1)">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <h5 class="text-left ">{{dataItem.name}}</h5>
                          <div class="cart_price">
                            <div class="row">
                              <div class="btn-group mr-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-warning" @click="updateQty(dataItem.id,'DECRE')"> -
                                </button>
                                <button type="button" class="btn " disabled> {{dataItem.count}} </button>
                                <button type="button" class="btn btn-success" @click="updateQty(dataItem.id,'INCRE')"> +
                                </button>
                              </div>
                              <div class="col-6 text-right pt-2">
                                <p>Rp. {{dataItem.price * dataItem.count}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cart-order">
                    <div class="order-total mt-5">
                      <h5>
                        Total Rp. {{totalprice}}
                      </h5>
                    </div>
                    <p class="pt-2">*Harga Belum Termasuk PPN</p>
                    <button class="btn btn-primary btncheckout" @click="paymentCheckout()" v-b-modal.modal-1>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <b-modal id="modal-1" title="Checkout" hide-footer>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Nomer Invoice: </td>
                    <td>#{{idInvoice}}</td>
                  </tr>
                  <tr>
                    <td>Nama Cashier: </td>
                    <td>Pevita</td>
                  </tr>
                  <tr v-for="invoiceFood in cart" :key="invoiceFood.id">
                    <td>{{invoiceFood.name}}</td>
                    <td>Rp {{invoiceFood.price * invoiceFood.count}}</td>
                  </tr>
                  <tr>
                    <td>Ppn</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>Total Bayar </td>
                    <td>Rp {{calculate}}</td>
                  </tr>
                  <tr>
                    <td> <label for="example-datepicker">Choose a date</label>
                      
                    </td>
                    <td>
                      <b-form-datepicker id="example-datepicker" v-model="datecheck" class="mb-2"></b-form-datepicker>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment</td>
                    <td>
                      <b-form-select id="input-3" :options="payment" required></b-form-select>
                    </td>
                  </tr>

                </tbody>
              </table>

              <button class="btn btn-block btn-primary checkoutbtn" @click="checkoutPay()">Pay</button>
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
        datecheck: '',


        formCheckout: {
          invoice: '',
          namehis: '',
          cashier: 'Pevita',
          ppn: '10',
          totalprice: '',
          date: '' 
        },
        payment: [{
          text: "Cash",
          value: 1
        }, {
          text: "Debit",
          value: 2
        }],
      };

    },
    components: {
      Navbar,
      Title,
      Card,
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

      addCart(Prod) {
        let result = this.cart.find((res) => {
          if (res.id == Prod.id) {
            return res.id;
          }
          console.log(result);
        });
        if (result) {
          for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == Prod.id) {
              const newFood = {
                ...this.cart[i],
                count: this.cart[i].count + 1,
              };
              this.$set(this.cart, i, newFood);

            }
          }
        } else {
          Prod.count = 1;
          this.cart.push(Prod);
        }
      },

      generateKey(key1, key2) {
        return `${key1}-${key2}`
      },

      updateQty(id, mode) {
        let result = this.cart.find((res) => {
          if (res.id == id) {
            return res.id;
          }
        });
        if (result) {
          for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
              const newFood = {
                ...this.cart[i],
                count: mode === 'INCRE' ? this.cart[i].count + 1 : this.cart[i].count - 1,
              };
              this.$set(this.cart, i, newFood);
            }

          }
        }
      },
      paymentCheckout() {
        this.idInvoice = Math.round(Math.random() * 1000 + 1);
        this.ppn = this.totalprice * (10 / 100)
      },

      checkoutPay() {
        this.formCheckout.invoice = this.idInvoice
        let foodname = [];
        this.cart.forEach((value) => {
          foodname.push(value.name)
        });
        this.formCheckout.namehis = foodname.join(", ").toString();
        this.formCheckout.totalprice = this.calculate;
        this.formCheckout.date = this.datecheck;

        axios({
            method: 'post',
            url: process.env.VUE_APP_URL + `history`,
            headers: {
              "authToken": this.$store.getters.getToken
            },
            data: this.formCheckout,
          })
          .then(res => {
            console.log(res.data)
            alert("Your payment was success")

          })
          .catch(err => {
            console.log(err);
            alert("Not you authorize, just admin can do that. If you wanna see my fiture, you can use user: tom1@gmail.com pass: tom1 ")
          })
      },

      getDataProduct(){
        axios
        .get(process.env.VUE_APP_URL + "product")
        .then((res) => {
          this.datas = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
      }



    },

    mounted() {
      this.getDataProduct()
    },

    computed: {
      addCartProduct() {
        return this.cart
      },


      qty() {
        let qty = 0
        for (const key in this.cart) {
          qty = qty + this.cart[key].count
        }
        return qty
      },

      totalprice() {
        let total = 0
        for (const res of this.cart) {
          total += Number(res.price) * Number(res.count)
        }
        return total
      },
      calculate() {
        let total = this.ppn + this.totalprice
        return total
      },

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
    margin-left: 10px;
    margin-right: 10px;
  }

  .btncheckout {
    width: 450px;
  }
</style>