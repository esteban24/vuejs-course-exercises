const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello world with Vue',
        fruits: ['banana', 'avocado', 'apple', 'pineaple'],
        fruitObjects: [
            { name: 'banana', quantity: 0 },
            { name: 'avocado', quantity: 12},
            { name: 'apple', quantity: 2 },
            { name: 'pineaple', quantity: 0 }
        ],
        fruitInput: '',
        total: 0
    },
    methods: {
        addFruit() {
            this.fruitObjects.push({
                name: this.fruitInput,
                color: '',
                quantity: 0
            })
            this.fruitInput = ''
        }
    },
    computed: {
        sumFruits() {
            this.total = 0;
            this.fruitObjects.forEach(fruit => {
                this.total += fruit.quantity;
            });
            return this.total
        }
    }
})