<script setup></script>
<script>
import { RouterLink, RouterView } from "vue-router";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>
<template>
  <the-header></the-header>
  <RouterView></RouterView>
  <the-footer></the-footer>
</template>

<style scoped></style>
