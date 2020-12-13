<template>
  <div class="history">
    <Navbar />
    <header>
      <div class="continer-fluid">
        <div class="header justify-content-around">
          <h1>History</h1>
        </div>
      </div>
    </header>
    <div class="container-fluid cardm">
      <div class="d-flex cardall">
        <div class="card" style="width: 30rem; background-color: #FFC0CB;">
          <div class="card-body">
            <h5 class="card-title">Today's Income</h5>
            <h4 class="card-subtitle mb-2">Rp.1.000.000</h4>
            <h5 class="card-title">+2% Yesterday</h5>
          </div>
        </div>

        <div class="card" style="width: 30rem; background-color: #AFEEEE;">
          <div class="card-body">
            <h5 class="card-title">Orders</h5>
            <h4 class="card-subtitle mb-2">3.270</h4>
            <h5 class="card-title">+5% Last Week</h5>
          </div>
        </div>
        <div class="card" style="width: 30rem; background-color: #DA70D6;">
          <div class="card-body">
            <h5 class="card-title">This year Income</h5>
            <h4 class="card-subtitle mb-2">Rp.10.0000.000</h4>
            <h5 class="card-title">+10% Last Year</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid empty">
      <h1 class="pt-5">Sorry we are not ready</h1>
    </div>
    <div class="tableo">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Invoice</th>
            <th scope="col">Food name</th>
            <th scope="col">Price</th>
            <th scope="col">Cashier</th>
            <th scope="col">PPN</th>
            <th scope="col">Total Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="history in dataHistory" :key="history.id">
            <th scope="row">{{history.id_history}}</th>
            <td>{{history.name}}</td>
            <td>{{history.price}}</td>
            <td>{{history.cashier}}</td>
            <td>{{history.ppn}}</td>
            <td>{{history.totalprice}}</td>
            <td>{{history.date}}</td>
          </tr>

        </tbody>
      </table>
    </div>


  </div>
</template>

<script scoped>
  import Navbar from '../components/Navbar.vue'
  import axios from 'axios';

  export default {
    components: {
      Navbar
    },
    name: "History",
    data() {
            return {
                dataHistory: '',
            }
        },
    mounted() {
            axios.get('http://localhost:9000/history')
                .then(res => {
                    this.dataHistory = res.data.result
                })
                .catch(err => {
                    console.log(err);
                })
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
    background-color: white;
    align-items: center;
  }

  .header h1 {
    margin-left: -150px;
  }

  .cardm {
    position: absolute;
    margin: 110px 0 0 0;
  }

  .cardall {
    margin-left: 200px;
  }

  .card {
    margin-left: 30px;
    height: 180px;
    text-align: center;
    padding-top: 20px;
  }



  .empty {
    position: absolute;
    margin: 300px 0 0 245px;
    background-color: whitesmoke;
    height: 400px;
    width: 1500px;

  }


  .tableo {
    position: absolute;
    margin: 720px 0 0 245px;
    width: 1500px;
    background-color: whitesmoke;
    margin-bottom: 10px;
  }
</style>