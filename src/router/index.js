import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from "../views/Landing.vue"
import MyProfile from "../views/MyProfile.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
    },
    {
        path:"/myprofile",
        name:"MyProfile",
        component:MyProfile,
    },
    
]

const router = new VueRouter ({
    routes
});

export default router;