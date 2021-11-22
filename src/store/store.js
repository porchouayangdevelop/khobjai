import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        person: [{
            id: 1,
            name: 'porchouayang',
            age: 26
        }],

    },
    mutations: {
        setPerson(state, person) {
            state.person = person
        }
    },
    getters: {

        person: state => state.person
    }
})