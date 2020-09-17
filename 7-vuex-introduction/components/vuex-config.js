const store = new Vuex.Store({
    state: {
        number: 10
    },
    mutations: {
        plus(state) {
            state.number++;
        },
        minus(state) {
            state.number--;
        }
    }
});