Vue.component('counter', {
    template: `
        <div class="container">
            <h3>{{ counter }}</h3>
            <button class="btn btn-primary" @click="counter++">Plus</button>
            <button class="btn btn-primary" @click="restore">Restore counter</button>
        </div>
    `,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        restore() {
            this.counter = 0
        }
    },
});