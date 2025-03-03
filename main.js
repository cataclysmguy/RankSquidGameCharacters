const app = Vue.createApp({
});

import m from './pages/page1.js'

const routes = [
    { path: '/', component: m },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

app.use(router);
app.mount('#app');