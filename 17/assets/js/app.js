const LS_KEY =  'tasks';

new Vue({
    el: '#app',
    data: {
        test: 123,
        todo: '',
        items: [],
    },
    mounted() {
        const todos = JSON.parse(localStorage.getItem(LS_KEY));

        this.items = todos ?? [];
    },
    methods: {
        sendTodo() {
            console.log(this.todo);
            this.items.push(this.todo);

            const todos = this.items;

            localStorage.setItem(LS_KEY, JSON.stringify(todos));

            this.todo = '';
        },
    }
})