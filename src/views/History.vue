<template>
  <div class="history">
    <div class="row">
      <Navbar />
      <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 px-0">
        <header>
          <div class="">
            <div class="header ">
              <h1>History</h1>
            </div>
          </div>
        </header>
        <div class="cardm col-12 mt-3">
          <div class="row">
            <div class="cardContainer col-md-4 col-sm-12">
              <div class="card card-body">
                <h5 class="card-title">Today's Income</h5>
                <h4 class="card-subtitle mb-2">Rp.1.000.000</h4>
                <h5 class="card-title">+2% Yesterday</h5>
              </div>
            </div>
            <div class="cardContainer col-md-4 col-sm-12">
              <div class="card card-body">
                <h5 class="card-title">Orders</h5>
                <h4 class="card-subtitle mb-2">3.270</h4>
                <h5 class="card-title">+5% Last Week</h5>
              </div>
            </div>
            <div class="cardContainer col-md-4 col-sm-12">
              <div class="card card-body">
                <h5 class="card-title">This year Income</h5>
                <h4 class="card-subtitle mb-2">Rp.10.0000.000</h4>
                <h5 class="card-title">+10% Last Year</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 imageschart">
          <img src="../assets/Chart .png" alt="chart">
        </div>
        <div class="tableo mt-3 mx-3">
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Invoice</th>
                <th scope="col">Name</th>
                <th scope="col">Cashier</th>
                <th scope="col">PPN</th>
                <th scope="col">Total Price</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="history in dataHistory" :key="history.id">
                <th scope="row">{{history.id_history}}</th>
                <td>{{history.invoice}}</td>
                <td>{{history.namehis}}</td>
                <td>{{history.cashier}}</td>
                <td>{{history.ppn}}</td>
                <td>{{history.totalprice}}</td>
                <td>{{history.date}}</td>
                <td>
                  <b-button v-b-modal.modal-update variant="primary mr-2">
                    <b-icon icon="gear"></b-icon>
                  </b-button>
                  <b-button v-b-modal.modal-delete variant="danger">
                    <b-icon icon="trash"></b-icon>
                  </b-button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div>
        <b-modal id="modal-update" title="Update">
          <p class="my-4">Update </p>
        </b-modal>
        <b-modal id="modal-delete" title="Are you sure want to delete this data?">
          <p class="my-4">Are you sure want to delete this data?</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script scoped>
  import Navbar from '../components/Navbar.vue'
  import Axios from 'axios';

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
      Axios.get('history')
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
  .Navbar {
    background-color: white;
  }

  .header {
    z-index: 999;
    background-color: white;
    align-items: center;
    height: 100px;
    padding-top: 20px;
  }

  .empty{
    background-color: white;
    height: 280px;
  }

  .tableo {
    height: 38vh;
    background-color: white;
    margin-bottom: 10px;
  }

  .imageschart img{
    margin-top: 10px;
    width: 100%;
  }
</style>