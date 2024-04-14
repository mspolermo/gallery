import Vue from "vue";
import MainPage from "@/pages/MainPage.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/photo',
        component: () => import('./pages/PhotosPage.vue') // lazy-loading
    }
];

export  default  new VueRouter({
    mode: 'history', // чтоб маршруты работали через слэши,
    routes
})