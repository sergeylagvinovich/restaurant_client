<template>
    <div class="row">
      <div class="col">
        <h3>Пользователи системы</h3>
      </div>
    </div>
    <div class="row">
        <div class="col text-end">
            <button class="btn btn-success" @click="goTo('UserCreate',null)">Создать</button>
        </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-light">
          <thead>
          <tr>
            <th>Имя</th>
            <th>Логин</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Активен</th>
            <th>Роли</th>
            <th>Действия</th>
          </tr>
          </thead>
          <tbody v-if="!getLoading">
          <tr v-for="item in getData">
            <td>{{ item.name }}</td>
            <td>{{ item.userName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td v-if="!item.isActive">
              <span class="material-icons c-danger">close</span>
            </td>
            <td v-else>
              <span class="material-icons c-success">check</span>
            </td>
            <td>
              <label v-for="role in item.userRoles">{{role.role.name+" "}}</label>
            </td>
            <td>
              <span class="material-icons c-success pointer" @click="goTo('UserEdit',{id:item.id})">mode_edit</span>
              <span class="material-icons c-danger pointer"  @click="deleteUser(item.id)">delete</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router";

export default {
  name: "UsersTable",
  computed:{
    ...mapGetters({
      'getLoading':'UsersTable/getLoading',
      'getData':'UsersTable/getData',
    }),
  },
  methods:{
    goTo(name, params){
      router.push({ name, params })
    },
    ...mapActions({
      'fetch':'UsersTable/fetchUsers',
      'deleteUser':"UsersTable/deleteUser"
    }),
    init() {
      this.fetch();
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
  @import 'material-icons/iconfont/material-icons.css';
</style>