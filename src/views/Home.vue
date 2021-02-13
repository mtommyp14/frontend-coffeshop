<template>
  <div class="home">
    <div class="col cardbig pt-5">


      <b-card img-src="../assets/undraw_hang_out_h9ud.png" img-alt="Card image" img-left class="mb-3">
        <b-card-text>

          <h1 class="pt-3"> <strong>CoffeShop</strong> </h1>
          <h3> The best place for you eat. </h3>
          <hr>

          <template>
            <div class="pt-4">
              <b-form @submit.prevent="onSubmitLogin">
                <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
                  {{ error[0] }}
                </div>
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1" class="text-left">
                  <b-form-input id="input-1" v-model="formlogin.email" type="email" placeholder="Enter email" required>
                  </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Your Password:" label-for="input-2" class="text-left">
                  <b-form-input id="input-2" v-model="formlogin.password" placeholder="Enter Password" type="password" required>
                  </b-form-input>
                </b-form-group>


                <p class="text-right">Forget you password?</p>



                <b-button type="submit" block variant="primary mr-2 mt-2">Login</b-button>
                <b-button v-b-modal.modal-addUser block variant="outline-primary mt-2">Signup</b-button>


                
              </b-form>



            </div>

            <div>
              <b-modal id="modal-addUser" hide-footer title="SignUp">
                <template>
                  <b-form @submit.prevent="onSubmitSignup" @reset="onResetUser">
                    <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                      <b-form-input id="input-1" v-model="formSignup.email" type="email" placeholder="Enter email"
                        required></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                      <b-form-input id="input-2" v-model="formSignup.password" placeholder="Enter password" required>
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
                      <b-form-input id="input-3" v-model="formSignup.name" placeholder="Enter name" required>
                      </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary mr-2 mt-2">Submit</b-button>
                    <b-button type="reset" variant="danger mt-2">Reset</b-button>
                  </b-form>
                </template>
              </b-modal>
            </div>

          </template>

        </b-card-text>
      </b-card>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    components: {},
    name: "Home",
    data() {
      return {
        formlogin: {
          email: '',
          password: ''
        },
        errors: null,

        formSignup: {
          email: '',
          password: '',
          name: '',
          role: 'users',

        },
        

      }
    },
    
    methods: {
      onSubmitLogin() {
        this.$store.dispatch('Login', this.formlogin)
        .then(() => {
          this.$router.push('/product')
        })
        .catch(er => {
          console.log(er);
          alert(er)
        })
      },



      onSubmitSignup() {
        axios({
     

          method: "POST",
            url: process.env.VUE_APP_URL + "users",
            headers: {
              "Content-Type": "application/json",
              "authToken": this.$store.getters.getToken
            },
            data: this.formSignup,

          })
          .then((res) => {

            this.response = JSON.parse(JSON.stringify(res))
            this.$bvModal.hide("modal-addUser");
            alert("Your Signup Success")
          })
          .catch(err => {
            console.log(err);
          })

      },

      onResetUser(event) {
        event.preventDefault()
        this.formSignupEdit.name = ''
        this.formSignupEdit.price = ''
        this.formSignupEdit.image = ''
        this.formSignupEdit.type = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      
      
      onReset(event) {
        event.preventDefault()
        this.formSignup.email = ''
        this.formSignup.password = ''
        this.formSignup.name = ''
        this.formSignup.role = 'users'

        this.show2 = false
        this.$nextTick(() => {
          this.show2 = true
        })
      }

    }




  };
</script>
<style scoped>
  .cardbig {
    margin: auto;
    align-items: center;
    text-align: center;
    width: 70vw;
    margin-top: 15vh;
  }

  img {
    height: 60vh;
  }
</style>