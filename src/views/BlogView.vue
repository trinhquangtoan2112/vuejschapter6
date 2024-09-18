<template>
  <div id="wrapper">
    <!-- Header Container
================================================== -->

    <!-- Titlebar
================================================== -->
    <the-title-bar></the-title-bar>
    <!-- Content
================================================== -->
    <the-content-blog></the-content-blog>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheTitleBar from "@/components/TheTitleBar.vue";
import TheContentBlog from "@/components/TheContentBlog.vue";
export default {
  components: { TheTitleBar, TheContentBlog },
};
</script>

<style></style>
