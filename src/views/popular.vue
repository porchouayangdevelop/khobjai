<template>
  <div class="Popular">
    <div class="container mx-auto py-14 lg:px-0 sm:py-20">
      <section class="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 class="text-4xl sm:text-5xl font-black">Popular Makes</h1>
        </div>
        <div class="flex flex-row gap-3 sm:gap-3 sm:mt-10 mt-6">
          <button
            class="
              btn_models
              sm:hover:border-error
              border-transparent border
              sm:hover:border-current
              rounded-lg
              px-5
              sm:px-8
              py-2
              focus:bg-red-50 focus:text-error focus:border-error
              flex flex-col
              items-center
              justify-center
            "
          >
            <span class="text-xl">Audi</span>
            <span
              class="
                whitespace-nowrap
                font-sans font-thin
                text-xs text-gray-400
              "
              >14 Listings</span
            >
          </button>
          <button
            class="
              btn_models
              sm:hover:border-error
              border-transparent border
              sm:hover:border-current
              rounded-lg
              px-5
              sm:px-8
              py-2
              focus:bg-red-50 focus:text-error focus:border-error
              flex flex-col
              items-center
              justify-center
            "
          >
            <span class="text-xl">BMW</span>
            <span
              class="
                whitespace-nowrap
                font-sans font-thin
                text-xs text-gray-400
              "
              >14 Listings</span
            >
          </button>
          <button
            class="
              btn_models
              sm:hover:border-error
              border-transparent border
              sm:hover:border-current
              rounded-lg
              px-5
              sm:px-8
              py-2
              focus:bg-red-50 focus:text-error focus:border-error
              flex flex-col
              items-center
              justify-center
            "
          >
            <span class="text-xl">Cadillac</span>
            <span
              class="
                whitespace-nowrap
                font-sans font-thin
                text-xs text-gray-400
              "
              >14 Listings</span
            >
          </button>
          <button
            class="
              btn_models
              sm:hover:border-error
              border-transparent border
              sm:hover:border-current
              rounded-lg
              px-5
              sm:px-8
              py-2
              focus:bg-red-50 focus:text-error focus:border-error
              flex flex-col
              items-center
              justify-center
            "
          >
            <span class="text-xl">Ferrari</span>
            <span
              class="
                whitespace-nowrap
                font-sans font-thin
                text-xs text-gray-400
              "
              >14 Listings</span
            >
          </button>
        </div>
      </section>
      <section class="my-4 px-4 lg:px-0">
        <Popular_comp class="" />
      </section>
      <section
        class="
          flex flex-col
          gap-12
          md:flex-row
          items-center
          justify-between
          px-4
          lg:px-0
        "
      >
        <div class="flex gap-5 flex-row items-center">
          <button
            class="w-14 h-14 rounded-full bg-white shadow text-gray-900 prev"
          ></button>
          <button
            class="w-14 h-14 rounded-full bg-white shadow text-gray-900 next"
          ></button>
        </div>
        <button class="bg-error py-3 px-10 rounded-lg text-white">View</button>
      </section>
    </div>
  </div>
</template>
<script>
import Popular_comp from "@/components/popular/popular.vue";
export default {
  components: {
    Popular_comp,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang="postcss" scoped>
.prev::before {
  content: "<";
}
.next::after {
  content: ">";
}
.Popular {
  background: #eff3fa;
}
.btn_models {
  background: #fafbfe;
  line-height: 1px;
}
@media screen and (min-width: 640px) {
  .btn_models:hover {
    background: #fff0eb;
  }
}
</style>