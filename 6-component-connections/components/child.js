Vue.component('child', {
    template: /*html*/
    `
    <div class="container bg-info p-5 text-white">
        <h3>Child component</h3>
        <h5>{{ phrase }}</h5>
    </div>
    `,
    props: ['phrase']
});