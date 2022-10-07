<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand text-uppercase font-weight-bold">
          <div class="logo"></div>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler navbar-toggler-right"
        >
          <iconify-icon icon="eva:menu-fill" class="burger"></iconify-icon>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/home">
                <a href="#" class="nav-link text-uppercase font-weight-bold"
                  >Home <span class="sr-only">(current)</span></a
                >
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-uppercase font-weight-bold"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Gallery</a
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-uppercase font-weight-bold"
                >Contact</a
              >
            </li>
          </ul>
          <a href="#"
            ><iconify-icon
              icon="ant-design:user-outlined"
              class="icon-account"
            ></iconify-icon
          ></a>
          <router-link to="/Card">
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
export default {
  name: "BaseHeader",
  data() {
    return {
      user: null,
    };
  },
};
</script>
<style></style>
