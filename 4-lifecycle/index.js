const VUE_GREETING = "Hello Vue.js"
const HELLO_WORLD_GREETING = "Hello World"

const app = new Vue({
    el: '#app',
    beforeCreate() {
        console.log('Before create')
    },
    created() {
        console.log('Created')
    },
    beforeMount() {
        console.log('Before mount')
    },
    mounted() {
        console.log('Mounted')
    },
    beforeUpdate() {
        console.log('Before update')
    },
    updated() {
        console.log('Updated')
    },
    beforeDestroy() {
        console.log('Before destroy')
    },
    destroyed() {
        console.log('Destroyed')
    },
    data: {
        greeting: VUE_GREETING
    },
    methods: {
        changeGreeting() {
            switch (this.greeting) {
                case VUE_GREETING:
                    this.greeting = HELLO_WORLD_GREETING;
                    break;
                case HELLO_WORLD_GREETING:
                    this.greeting = VUE_GREETING;
                default:
                    break;
            }
        },
        destroy() {
            this.$destroy();
        }
    },
    computed: {        
    }
})