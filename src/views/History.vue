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
          <b-table id="my-tableCategory" :fields="fieldsHistory" :items="setHistory" :per-page="perPageHistory"
                :current-page="currentPageHistory" responsive="sm">
                <template #cell(action)="dataHistory"> 
                  <b-button v-b-modal.modal-deleteHistory variant="danger" @click="onDeleteHistory(dataHistory.item.id_history)">
                    <b-icon icon="trash"></b-icon>
                  </b-button>
                </template>
              </b-table>
              <b-pagination v-model="currentPageHistory" :total-rows="rowsHistory" :per-page="perPageHistory"
                aria-controls="my-tableHistory" align="center">
              </b-pagination>
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
  import axios from 'axios';


  export default {
    components: {
      Navbar
    },
    name: "History",
    data() {
      return {
        perPageHistory: 3,
        currentPageHistory: 1,
        setHistory: [],
        fieldsHistory: ['id_history', 'invoice', 'namehis', 'cashier', 'ppn', 'totalprice', 'date', 'action'],

      }
    },

    mounted() {
      this.getDataHistory()
    },

    computed: {
      rowsHistory() {
        return this.setHistory.length
      },
    },

    methods: {
      getDataHistory(){
        axios.get(process.env.VUE_APP_URL + 'history')
          .then(res => {
            this.setHistory = res.data.result
          })
          .catch(err => {
            console.log(err);
          })
      },
      onDeleteHistory(id){
        console.log(id);
        axios({
            method: 'delete',
            url: process.env.VUE_APP_URL + `history/${id}`,
            headers: {
              "authToken": this.$store.getters.getToken
            }
          })
          .then(res => {
            this.getDataHistory()
            console.log(res.data)
          })
          .catch(err => {
            console.log(err);
            alert("Not you authorize, just admin can do that. If you wanna see my fiture, you can use user: tom1@gmail.com pass: tom1 ")
          })
      }
    },
    

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