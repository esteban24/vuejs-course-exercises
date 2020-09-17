Vue.component('child', {
    template: /*html*/
    `
        <div class="container p2">
            <button class="btn btn-success" @click="plus(2)">+ 2 ({{ number + 2 }})</button>
            <button class="btn btn-danger" @click="minus(2)">- 2 ({{ number - 2 }})</button>
        </div>
    `,
    computed: {
        ... Vuex.mapState(['number'])
    },
    methods: {
        ... Vuex.mapMutations(['plus', 'minus'])
    },
});