import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import Product from './modules/product'
import  register from './modules/register'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    
    
    modules: {
        register,
        auth,
        Product,
        
    },
    plugins: [createPersistedState()]
})