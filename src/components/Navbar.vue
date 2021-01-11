<template>
    <div class="col-sm-1 col-md-1 col-lg-1 px-0 bg-white">
        
        <nav>
                <ul>
                    <li>
                        <img class="menu mt-4 bg-white imagemenu" src="../assets/menu.png" >
                    </li>
                    <li>
                        <router-link to="/product" v-b-popover.hover.top="'Product'"> <img src="../assets/fork.png" alt=""> </router-link>
                    </li>
                    <li>
                        <router-link to="/history" v-b-popover.hover.top="'History Payment'"><img src="../assets/clipboard.png" alt=""> </router-link>
                    </li>
                    
                    
                    <li>
                        <router-link to="/settings" v-b-popover.hover.top="'Setting'">
                            <b-icon-gear font-scale="3" class="mt-5" variant="secondary"></b-icon-gear>
                        </router-link>
                    </li>

                    <li>    
                        <b-icon-door-open-fill font-scale="3" class="mt-5" variant="secondary" v-b-popover.hover.top="'Exit'" @click="logout"></b-icon-door-open-fill>
                        
                    </li>
                </ul>
            </nav>

    </div>
</template>

<script>

    export default {
        name: "Navbar",
        data() {
            return {
                hideaddproduct: true,
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push('/')
                })
            },

        }
    }
</script>

<style scoped>
    nav ul,
    li {
        list-style: none;
    }

    nav {
        margin: 0;
        padding: 0;
        background-color: #fff;
        align-items: center;
        text-align: center;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    nav img {
        padding-top: 40px;
        padding-left: 0px;
    }

    .containershow-additems {
        margin-left: 100px;
        margin-top: 100px;
        background-color: rgb(230, 230, 230);
        opacity: 90%;
        filter: blur(8px);
    }

    .toogle-nav-additems {
        position: absolute;
        z-index: 10;
        margin-left: 200px;

    }

   

    /* 
    .form-nav {
        margin: 150px 0 0 380px;
        align-items: center;
        opacity: 100%;
        padding-left: 150px;
        padding-right: 100px;
        z-index: 999;
    } */
</style>