const store = new Vuex.Store({
    state: {
        number: 10
    },
    mutations: {
        plus(state, quantity) {
            state.number += quantity;
        },
        minus(state, quantity) {
            state.number -= quantity;
        }
    }
});