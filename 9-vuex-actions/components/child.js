Vue.component('child', {
    template: /*html*/
    `
        <div class="container">
            <div class="container p2">
                <button class="btn btn-success" @click="plus(2)">+ 2 ({{ number + 2 }})</button>
                <button class="btn btn-danger" @click="minus(2)">- 2 ({{ number - 2 }})</button>
            </div>
            <hr>
            <div class="container p2">
                <!-- // This is necessary only if there is no previous call to "fetchCourses" method
                    <button class="btn btn-info" @click="fetchCourses">Fetch Courses</button>
                    <hr>
                -->
                <ul v-for="item of courses">
                    <li>Id: {{ item.id }} Name: {{ item.name }}</li>
                </ul>
            </div>
        </div>
    `,
    /**
     * beforeMount() lifecycle method call to fetch courses from file before DOM os mounted
     */
    beforeMount() {
        this.fetchCourses();
    },
    computed: {
        ... Vuex.mapState(['number', 'courses'])
    },
    methods: {
        ... Vuex.mapMutations(['plus', 'minus']),
        ... Vuex.mapActions(['fetchCourses'])
    },
});