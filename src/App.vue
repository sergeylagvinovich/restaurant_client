<template>
  <BaseHeader v-if="vis"></BaseHeader>
  <div class="main-content">
    <router-view />
  </div>
  <BaseFooter v-if="vis"></BaseFooter>
</template>
<script>
import BaseHeader from "./components/BaseComponents/BaseHeader";
import BaseFooter from "./components/BaseComponents/BaseFooter";
import router from "@/router";
export default {
  name: "App",
  components: { BaseHeader, BaseFooter },
  computed: {
    vis() {
      if (this.$route.name === "LogInPage") {
        return false;
      }
      return true;
    },
  },
};
</script>
<style></style>
