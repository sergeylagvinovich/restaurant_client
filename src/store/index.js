import { createStore } from 'vuex'
import UsersTable from "@/store/modules/Administrations/UsersTable";
import UserProfile from "@/store/modules/Administrations/UserProfile";
import RoleModule from "@/store/modules/Administrations/Roles/RoleModule";
import DishModule from "@/store/modules/MainModules/DishModule";
import authModule from "@/store/modules/MainModules/authModule";
import CartModule from "@/store/modules/MainModules/CartModule";
import OrderShef from "@/store/modules/MainModules/OrderShef";
import OrderCourier from "@/store/modules/MainModules/OrderCourier";
import OrderCallCenter from "@/store/modules/MainModules/OrderCallCenter";
import OrderUser from "@/store/modules/MainModules/OrderUser";
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    OrderUser,
    OrderCallCenter,
    UsersTable,
    UserProfile,
    RoleModule,
    DishModule,
    authModule,
    CartModule,
    OrderShef,
    OrderCourier
  }
})
