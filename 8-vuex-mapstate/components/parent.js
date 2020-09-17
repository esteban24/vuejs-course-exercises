Vue.component('parent', {
    template: /*html*/
    `
        <div class="container mt-5 p3">
            <h1>Number {{ number }}</h1>
            <child></child>
        </div>
    `,
    computed: {
        ...Vuex.mapState(['number'])
    },
});