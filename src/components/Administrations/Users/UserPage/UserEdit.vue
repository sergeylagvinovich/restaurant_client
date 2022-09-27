<template>
  <div class="row">
    <div class="col">
      <h3>Редактирование пользователя</h3>
    </div>
  </div>
  <div class="row" v-if="!getLoading">
    <div class="col-lg-12">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <input class="form-control" v-model="profile.name"/>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <input class="form-control" v-model="profile.email"/>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Phone</p>
            </div>
            <div class="col-sm-9">
              <input class="form-control" v-model="profile.phone"/>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Address</p>
            </div>
            <div class="col-sm-9">
             <input class="form-control"/>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Roles</p>
              <span class="material-icons c-success pointer" @click="addRole">add_circle</span>
            </div>
            <div class="col-sm-9">
              <table class="table table-light">
                <thead>
                  <tr>
                    <th>Роль</th>
                    <th>Добавление</th>
                    <th>Редактирование</th>
                    <th>Удаление</th>
                    <th>Просмотр</th>
                    <th>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(role,index) in profile.userRoles">
                    <td>
                      <select class="form-control" v-model="role.role">
                        <option v-for="item in getRoles" :value="item">{{item.name}}</option>
                      </select>
                    </td>
                    <td @click="role.canInsert=!role.canInsert" class="pointer">
                      <span class="material-icons c-danger" v-if="!role.canInsert">close</span>
                      <span class="material-icons c-success" v-else>check</span>
                    </td>
                    <td @click="role.canUpdate=!role.canUpdate" class="pointer">
                      <span class="material-icons c-danger" v-if="!role.canUpdate">close</span>
                      <span class="material-icons c-success" v-else>check</span>
                    </td>
                    <td @click="role.canDelete=!role.canDelete" class="pointer">
                      <span class="material-icons c-danger" v-if="!role.canDelete">close</span>
                      <span class="material-icons c-success" v-else >check</span>
                    </td>
                    <td @click="role.canView=!role.canView" class="pointer">
                      <span class="material-icons c-danger" v-if="!role.canView" >close</span>
                      <span class="material-icons c-success" v-else>check</span>
                    </td>
                    <td>
                      <span class="material-icons c-danger pointer" @click="deleteRole(index)">delete</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-if="!getLoading">
    <div class="col-lg-6 text-start">
      <button class="btn btn-success w-50" @click="save">Save</button>
    </div>
    <div class="col-lg-6 text-end">
      <button class="btn btn-danger  w-50" @click="deleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import Multiselect from 'vue-multiselect'
import UserProfile from "@/store/modules/Administrations/UserProfile";
export default {
  name: "UserEdit",
  components:{Multiselect},
  computed:{
    profile:{
      get(){
        return this.getData;
      },
      set(value){
        this.setData(value);
      }
    },
    ...mapGetters({
      'getLoading':'UserProfile/getLoading',
      'getData':'UserProfile/getData',
      'getRoles':'RoleModule/getData',
    }),
  },
  methods:{
    ...mapMutations({
      'setData':'UserProfile/setData',
      'addRole':'UserProfile/addRole',
      'deleteRole':'UserProfile/deleteRole',

    }),
    ...mapActions({
      'save':'UserProfile/save',
      'fetch':'UserProfile/fetch',
      'deleteUser':''
    }),
    init(){
      this.fetch();
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>