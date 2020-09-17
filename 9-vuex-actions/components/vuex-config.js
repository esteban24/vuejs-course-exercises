const store = new Vuex.Store({
    state: {
        number: 10,
        courses: []
    },
    mutations: {
        plus(state, quantity) {
            state.number += quantity;
        },
        minus(state, quantity) {
            state.number -= quantity;
        },
        fillUpCourses(state, fetchedCourses) {
            state.courses = fetchedCourses;
        } 
    },
    actions: {
        fetchCourses: async function ({ commit }) {
            const data = await fetch('resources/courses.json');
            const courses = await data.json();

            commit('fillUpCourses', courses)
        } 
    }
});