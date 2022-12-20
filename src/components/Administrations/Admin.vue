<template>
  <div class="title-area">
    <div class="title-inner container paddings-side">
      <div class="title-h1 title-color-white text-lg-center">Administration</div>
    </div>
  </div>
  <div class="team-section">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Admin",

}
</script>

<style scoped>
@import 'material-icons/iconfont/material-icons.css';
</style>