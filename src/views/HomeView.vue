<script setup></script>
<script>
import TheContentVue from "@/components/TheContent.vue";
import TheBanner from "../components/TheBanner.vue";
import ThePlace from "@/components/ThePlace.vue";
import TheReview from "@/components/TheReview.vue";
import TheInfo from "@/components/TheInfo.vue";
import TheInfo1 from "@/components/TheInfo1.vue";
import TheBlog from "@/components/TheBlog.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheBanner,
    TheContentVue,
    ThePlace,
    TheReview,
    TheInfo,
    TheInfo1,
    TheBlog,
    TheFooter,
  },
};
</script>
<template>
  <div id="wrapper">
    <!-- Header Container
================================================== -->
    <!-- Header Container / End -->

    <!-- Banner
================================================== -->
    <the-banner></the-banner>
    <!-- Content
================================================== -->
    <the-content-vue></the-content-vue>
    <!-- Category Boxes / End -->
    <the-place></the-place>
    <!-- Fullwidth Section -->
    <the-review></the-review>
    <!-- Fullwidth Section / End -->
    <the-info></the-info>

    <!-- Info Section -->
    <the-info1></the-info1>
    <!-- Info Section / End -->

    <!-- Recent Blog Posts -->

    <!-- Recent Blog Posts / End -->
    <the-blog></the-blog>
    <!-- Footer
================================================== -->

    <!-- Footer / End -->

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>
