Vue.component('greeting', {
    template: `
    <div class="container">
        <h3>{{ greeting }}</h3>
        <p>This is a template</p>
    </div>
    `,
    data() {
        return {
            greeting: 'Hello Vue.js'
        }
    }
});