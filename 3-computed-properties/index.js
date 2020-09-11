const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        counter: 0
    },
    methods: {
    },
    computed: {
        reversed() {
            return this.message.split('').reverse().join('');
        },
        progress_bar_color() { 
            return {
                "bg-danger": this.counter <= 20,
                "bg-warning": this.counter > 20 && this.counter <= 70,
                "bg-success": this.counter > 70
            }
        }
    }
})