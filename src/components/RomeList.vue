<template>
  <section class="listings-container margin-top-30">
    <!-- Sorting / Layout Switcher -->
    <div class="row fs-switcher">
      <div class="col-md-6">
        <!-- Showing Results -->
        <p class="showing-results">14 Results Found</p>
      </div>
    </div>

    <!-- Listings -->
    <div class="row fs-listings">
      <room-list-item></room-list-item>
      <!-- Listing Item / End -->
    </div>
    <!-- Listings Container / End -->

    <!-- Pagination Container -->
    <div class="row fs-listings">
      <div class="col-md-12">
        <!-- Pagination -->
        <div class="clearfix"></div>
        <div class="row">
          <div class="col-md-12">
            <!-- Pagination -->
            <div class="pagination-container margin-top-15 margin-bottom-40">
              <nav class="pagination">
                <ul>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- Pagination / End -->

        <!-- Copyrights -->
        <div class="copyrights margin-top-0">
          © 2021 Listeo. All Rights Reserved.
        </div>
      </div>
    </div>
    <!-- Pagination Container / End -->
  </section>
</template>

<script>
import RoomListItem from "./RoomListItem.vue";
export default {
  components: {
    RoomListItem,
  },
};
</script>
