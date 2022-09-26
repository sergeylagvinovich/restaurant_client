<template>
  <div class="row" v-if="!getLoading">
    <div class="col-lg-12">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Имя</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ getData.name }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{ getData.email }}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Телефоны</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{{getData.phone}}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Address</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Roles</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">Role1, Role2, Role3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserView",
  computed:{
    ...mapGetters({
      'getLoading':'UserProfile/getLoading',
      'getData':'UserProfile/getData',
    }),
  },
  methods:{
    ...mapActions({
      'fetch':'UserProfile/fetch',
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