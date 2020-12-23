<template>
  <div class="settings">
    <div class="row">
      <Navbar />
      <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 px-0">
        <header>
          <div class="">
            <div class="header ">
              <h1>Setting</h1>
            </div>
          </div>
        </header>
        <div class="product mt-3 ml-3 col-11">
          <!-- 
          <table class="table" id="my-table" :items="setproduct" :per-page="perPage" :current-page="currentPage">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Food Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in setproduct" :key="product.id">
                <th scope="row">{{product.id}}</th>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.type}}</td>
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

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
            </b-pagination>

          </table> -->

          <div class="overflow-auto">
            <h4 class="pt-2 pb-2 float-left">Table Product</h4>
            <b-table id="my-table" :items="setproduct" :per-page="perPage" :current-page="currentPage">
              
              {{setproduct.id}}

              <template>
                <b-button v-b-modal.modal-update[setproduct.id] variant="primary mr-2" @click="showupdate = true">
                  <b-icon icon="gear"></b-icon>
                </b-button>

                <b-button v-b-modal.modal-delete[setproduct.id] variant="danger" @click="showdelete = true">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </template>

            </b-table>




            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
              align="center">
            </b-pagination>
          </div>


        </div>

        <div class="">
          <b-modal id="modal-update" title="Update">
            <p class="my-4">Update </p>
          </b-modal>
          <b-modal id="modal-delete" title="Are you sure want to delete this data?">
            <p class="my-4">Are you sure want to delete this data?</p>
          </b-modal>
        </div>



        <div class="bottom mt-3 ml-3 row">
          <div class="user mt-3  col-6">

          </div>
          <div class="category mt-3 ml-3 col-5">

          </div>
        </div>
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
    name: 'settings',
    data() {
      return {
        perPage: 6,
        currentPage: 1,
        setproduct: '',
        showupdate: false,
        showdelete: false,

      }
    },
    mounted() {
      axios.get(process.env.VUE_APP_URL + 'product')
        .then(res => {
          this.setproduct = res.data.result
        })
        .catch(err => {
          console.log(err);
        })
    },
    computed: {
      rows() {
        return this.setproduct.length
      }
    }

  }
</script>


<style scoped>
  .header {
    z-index: 999;
    background-color: white;
    align-items: center;
    height: 100px;
    padding-top: 20px;
  }

  .product {
    background-color: white;
    height: 50vh;
    width: 200vw;
  }

  .user {
    background-color: white;
    height: 30vh;
    width: 100vw;
  }

  .category {
    background-color: white;
    height: 30vh;
    width: 100vw;
  }
</style>