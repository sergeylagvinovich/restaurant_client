<template>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <router-link to="/users" tag="li" class="breadcrumb-item">
              <a>Users</a>
            </router-link>
            <router-link to="/users" tag="li" class="breadcrumb-item">
              <a>Roles</a>
            </router-link>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view/>
  </div>
</template>
<script>

// import 'bootstrap-vue/dist/bootstrap-vue.css'

</script>
<style>
.router-link-exact-active{

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
