import {createRouter, createWebHistory} from 'vue-router'
import UsersPage from '@/components/Administrations/Users/UsersPage'
import UsersTable from "@/components/Administrations/Users/UsersTable";
import UserView from "@/components/Administrations/Users/UserPage/UserView";
import UserEdit from "@/components/Administrations/Users/UserPage/UserEdit";

const routes = [
    {
        path: '/users',
        name: 'UsersPage',
        component: UsersPage,
        children: [
            {
                path: '',
                name: 'UsersTable',
                component: UsersTable,
            },
            {
                path: ':id/edit',
                name: 'UserEdit',
                component: UserEdit,
                meta: { method: "PUT" }
            },
            {
                path: ':id',
                name: 'UserView',
                component: UserView,
                meta: { method: "GET" }
            },
            {
                path: 'create',
                name: 'UserCreate',
                component: UserEdit,
                meta: { method: "POST" }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
