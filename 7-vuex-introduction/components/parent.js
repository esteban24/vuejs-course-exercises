Vue.component('parent', {
    template: /*html*/
    `
        <div class="container mt-5 p3">
            <h1>Number {{ $store.state.number }}</h1>
            <child></child>
        </div>
    `
});