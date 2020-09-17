Vue.component('parent', {
    template: /*html*/
    `
        <div class="container bg-dark mt-5 p-5 text-white">
            <h3>Parent component</h3>
            <div>
                <input type="text" v-model.text="inputPhrase" @keyup.enter="sendPhrase" placeholder="Write phrase and enter to pass to child"></input>
            </div>
            <hr>
            <h3>Child name: {{ childName }}</h3>
            <child :phrase="phraseSent" @childName="childName = $event"></child>
        </div>
    `,
    data() {
        return {
            inputPhrase: '',
            phraseSent: '',
            childName: ''
        }
    },
    methods: {
        sendPhrase() {
            this.phraseSent = this.inputPhrase
            this.inputPhrase = ''
        }
    },
});