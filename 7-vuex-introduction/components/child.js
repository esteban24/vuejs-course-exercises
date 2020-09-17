Vue.component('child', {
    template: /*html*/
    `
        <div class="container p2">
            <button class="btn btn-success" @click="$store.commit('plus')">+</button>
            <button class="btn btn-danger" @click="$store.commit('minus')">-</button>
        </div>
    `
});