<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand text-uppercase font-weight-bold">
          <router-link to="/home">
            <div class="logo"></div>
          </router-link>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler navbar-toggler-right"
          @click="showCollapse=!showCollapse"
        >
          <iconify-icon icon="eva:menu-fill" class="burger"></iconify-icon>
        </button>

        <div id="navbarSupportedContent" :class="['collapse navbar-collapse',showCollapse?'show':'']">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/home">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                  >Home <span class="sr-only">(current)</span></a
                >
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                  >About</a
                >
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/catalog">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                  >Menu</a
                >
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                  >Contact</a
                >
              </router-link>
            </li>

            <li class="nav-item" v-if="checkRole('COOK')">
              <router-link to="/shef">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Shef</a
                >
              </router-link>
            </li>
            <li class="nav-item" v-if="checkRole('COURIER')">
              <router-link to="/courier">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Courier</a
                >
              </router-link>
            </li>
            <li class="nav-item" v-if="checkRole('CALLCENTER')">
              <router-link to="/callCenter">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Courier</a
                >
              </router-link>
            </li>
            <li class="nav-item" v-if="checkRole('USER')">
              <router-link to="/userPageuser">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Orders</a
                >
              </router-link>
            </li>
            <li class="nav-item" v-if="checkRole('ADMIN')">
              <router-link to="/admin">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Admin</a
                >
              </router-link>
            </li>
          </ul>
<!--          <router-link to="/logout">-->
            <a @click="logout"
              ><iconify-icon icon="ant-design:user-outlined" class="icon-account"></iconify-icon
            ></a>
<!--          </router-link>-->
          <router-link to="/cart">
            <a href="#"
              ><iconify-icon icon="bx:cart" class="icon-cart"></iconify-icon
            ></a>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BaseHeader",
  data() {
    return {
      user: null,
      showCollapse:false,
    };
  },
  computed:{
    ...mapGetters({
      'getAuthUser':'authModule/getAuthUser',
    })
  },
  methods:{
    checkRole(role){
      if(this.getAuthUser==null){
        return false
      }
      return this.getAuthUser.userRoles.filter(x=>x.role.name === role).length>0;
    },
    ...mapActions({
        'logout':'authModule/logOut',
        'getUserInfo':'authModule/getUserInfo',
    }),
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>
<style></style>
