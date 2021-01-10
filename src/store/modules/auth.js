import Axios from "axios"


const state = {
    
    user: null,
    isLoggedIn: false,
    authToken: null 

    
}
const getters = {
    isLoggedIn(state){
        return state.isLoggedIn
    },
    user(state){
        return state.user
    },
    getIsAuth(state) {
        if (state.authToken != null) {
            return true
        } else {
            return false
        }
    },
    getOut(state){
        if(state.authToken == null){
            return true
        }else{
            return false
        }
    },
    getToken(state){
        return state.authToken
    }
    
    
    
}
const actions = {
    Login({commit}, data) {
        return new Promise((resolve, reject) => {
            Axios.post('auth', data)
            .then(res => {
                if(res.data.result[0].msg== "Check Password Anda"){
                    reject(res.data.result[0].msg)
                }
                console.log(res.data);
                resolve(res.data)
                commit('setToken', res.data.result[0].token)
            })
            .catch(err => {
                reject(new Error(err))
                
            })
        })
    },

    logout({commit}){
        return new Promise((resolve)=>{
            commit('reset_user')
            resolve()
        })
    }

    

}


const mutations = {
    
    set_user(state, data){
        state.user = data,
        state.isLoggedIn = true
    },
    reset_user(state){
        state.user = null,
        state.isLoggedIn = false,
        state.authToken = null
    },
    setToken(state, data) {
        state.authToken = data
    }
    
}

export default {
    state,
    getters,
    actions,
    mutations
}