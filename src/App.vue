<template>
  <BaseHeader></BaseHeader>
  <div class="main-content">
    <router-view />
  </div>
  <BaseFooter></BaseFooter>
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
      if (router.name === "HomePage") {
        return false;
      }
    },
  },
};
</script>
<style></style>
