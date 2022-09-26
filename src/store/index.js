import { createStore } from 'vuex'
import userModule from "@/store/modules/userModule";
import UsersTable from "@/store/modules/Administrations/UsersTable";
import UserProfile from "@/store/modules/Administrations/UserProfile";
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
    userModule,
    UsersTable,
    UserProfile,
  }
})
