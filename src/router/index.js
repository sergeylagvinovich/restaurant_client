import {createRouter, createWebHistory} from 'vue-router'
import UsersPage from '@/components/Administrations/Users/UsersPage'
import UsersTable from "@/components/Administrations/Users/UsersTable";
import UserView from "@/components/Administrations/Users/UserPage/UserView";
import UserEdit from "@/components/Administrations/Users/UserPage/UserEdit";
import HomePage from "@/components/Home/HomePage";
import AboutPage from "@/components/About/AboutPage";
import CatalogPage from "@/components/Catalog/CatalogPage";
import ContactPage from "@/components/Contact/ContactPage";
import LogInPage from "@/components/LogIn/LogInPage";
import CartCheckoutPage from "@/components/CartCheckout/CartCheckoutPage";
import UserPageShef from "@/components/Administrations/Users/UserPageShef/UserPageShef";
import UserPageCourier from "@/components/Administrations/Users/UserPageCourier/UserPageCourier";
import UserPageUser from "@/components/Administrations/Users/UserPageUser/UserPageUser";
const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/catalog',
        name: 'CatalogPage',
        component: CatalogPage,
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
    },
    {
        path: '/cart',
        name: 'CartCheckoutPage',
        component: CartCheckoutPage,
    },
    {
        path: '/login',
        name: 'LogInPage',
        component: LogInPage,
    },
    {
        path: '/shef',
        name: 'UserPageShef',
        component: UserPageShef,
    },
    {
        path: '/courier',
        name: 'UserPageCourier',
        component: UserPageCourier,
    },
    {
        path: '/userPageuser',
        name: 'UserPageUser',
        component: UserPageUser,
    },
    {

        // path: '/admin/users',
        // name: 'UsersPage',
        // component: UsersPage,
        // children: [
        //     {
        //         path: '',
        //         name: 'UsersTable',
        //         component: UsersTable,
        //     },
        //     {
        //         path: ':id/edit',
        //         name: 'UserEdit',
        //         component: UserEdit,
        //         meta: {
        //             method: "PUT",
        //             subString:"/edit",
        //         }
        //     },
        //     {
        //         path: ':id',
        //         name: 'UserView',
        //         component: UserView,
        //         meta: { method: "GET" }
        //     },
        //     {
        //         path: 'create',
        //         name: 'UserCreate',
        //         component: UserEdit,
        //         meta: {
        //             method: "POST",
        //             subString:"/create",
        //         }
        //     },
        // ],
        // path: '/home',
        // name: 'HomePage',
        // component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
