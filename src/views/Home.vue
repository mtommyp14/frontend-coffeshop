<template>
  <div class="home">
    <div class="mt-5">
      <b-jumbotron>
        <template #header>CoffeShop</template>
        <img class="heroimg" src="../assets/undraw_hang_out_h9ud.png" alt="">

        <template #lead> The best place for you eat. </template>


        <p class="pt-4"> Please Login first.</p>

        <b-button variant="primary" href="#" v-b-modal.modal-1>Login</b-button>

        <b-modal id="modal-1" title="Please Login First Buddy" hide-footer>
          <b-tabs content-class="mt-3">
            <b-tab title="Login" active>
              
            </b-tab>
            <b-tab title="Sign Up">
              
            </b-tab>
          </b-tabs>
        </b-modal>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: "Home",
    data() {
      return {
        
      }
    }
    
      
      
    
  };
</script>
<style scoped>


.heroimg{
  height: 500px;
}
</style>