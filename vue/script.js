const NotFound = {
    template: '<p>Страница не найдена</p>'
}
const Home = {
    template: '<p>Главная</p>'
}
const About = {
    template: '<p>о нас</p>'
}
const routes = {
    '/': Home,
    '/about': About
}
new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
})