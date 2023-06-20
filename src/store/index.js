import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    carts: [],
    type: 0
}

const mutations = {
    setCarts (state, carts) {
        state.carts = carts
    },
    setType (state, type) {
        state.type = type
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store
