import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

import AddContact from "./views/AddContact.vue";
import EditContact from "./views/EditContact.vue";


Vue.use(Router)

export default new Router(
    {
        routes : [
            {
                path: "/",
                name: "Home",
                component: Home,
            },
            {
                path: "/login",
                name: "Login",
                component: Login,
            },
            {
                path: "/add",
                name: "AddContact",
                component : AddContact,
            },
            {
                path: "/edit",
                name: "EditContact",
                component : EditContact,
            },
            
        ]

    });

