<template>
  <div class="feature">
    <div class="container mx-auto py-10">
      <section
        class="
          flex flex-col
          md:flex-col
          items-center
          md:items-center
          lg:flex-row
          justify-between
          mb-5
        "
      >
        <div class="flex flex-col items-center md:items-center lg:items-start">
          <h3
            class="
              text-center
              md:text-center
              lg:text-left
              text-error text-md
              mb-2
            "
          >
            Handy picked
          </h3>
          <h1 class="text-3xl sm:text-5xl font-extrabold">Featured Listings</h1>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-5 lg:gap-5">
          <button
            class="
              px-10
              py-2
              rounded-lg
              bg-gray-100
              border
              focus:border-error focus:bg-red-50
              hover:border-error hover:bg-red-50
            "
          >
            New
          </button>
          <button
            class="
              px-10
              py-2
              rounded-lg
              bg-gray-100
              border
              focus:border-error focus:bg-red-50
              hover:border-error hover:bg-red-50
            "
          >
            Used
          </button>
        </div>
      </section>
      <section class="px-4 lg:px-0 sm:px-0">
        <Feature_news />
        <!-- <Feature_used v-else /> -->
      </section>
      <section
        class="
          px-4
          lg:px-0
          flex flex-col
          gap-12
          sm:flex-row
          items-center
          justify-between
        "
      >
        <div class="flex gap-5 order-2 sm:order-1 flex-row items-center">
          <p class="text-gray-400">Follow Us</p>
          <button
            class="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-gray-100
              shadow
              text-gray-900
              prev
              whitespace-nowrap
            "
          >
            <i class="fas fa-facebook-f"></i>
          </button>
          <button
            class="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-gray-100
              shadow
              text-gray-900
              next
              whitespace-nowrap
            "
          >
            <i class="fas fa-twitter"></i>
          </button>
          <button
            class="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-gray-100
              shadow
              text-gray-900
              next
              whitespace-nowrap
            "
          >
            <i class="fab fas-instagram"></i>
          </button>
        </div>
        <button
          class="
            w-full
            sm:w-auto
            bg-error
            py-3
            px-10
            order-1
            sm:order-2
            rounded-lg
            text-white
          "
        >
          View
        </button>
      </section>
    </div>
  </div>
</template>
<script>
import Feature_news from "@/components/feature/features_news.vue";
// import Feature_used from "@/components/feature/feature_used";
export default {
  components: {
    Feature_news,
    // Feature_used,
  },
  data() {
    return {
      ishidden: false,
    };
  },
};
</script>
<style lang="postcss" scoped>
</style>