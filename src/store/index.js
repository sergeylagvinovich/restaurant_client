import { createStore } from 'vuex'
import UsersTable from "@/store/modules/Administrations/UsersTable";
import UserProfile from "@/store/modules/Administrations/UserProfile";
import RoleModule from "@/store/modules/Administrations/Roles/RoleModule";
import DishModule from "@/store/modules/MainModules/DishModule";
import authModule from "@/store/modules/MainModules/authModule";
import CartModule from "@/store/modules/MainModules/CartModule";
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
    UsersTable,
    UserProfile,
    RoleModule,
    DishModule,
    authModule,
    CartModule
  }
})
