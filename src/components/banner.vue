<template>
  <div class="banner-bg">
    <div
      class="
        container
        mx-auto
        px-5
        lg:px-0
        flex
        justify-center
        items-center
        flex-col
      "
    >
      <section class="flex items-center justify-center pt-12 lg:pt-24">
        <h1
          class="
            text-center text-white text-4xl
            lg:text-6xl
            font-extrabold
            whitespace-nowrap
            mt-10
          "
        >
          Find Your
          <span class="text-4xl lg:text-6xl font-extrabold text-error">
            Perfect
          </span>
          Car
        </h1>
      </section>
      <section
        class="flex flex-row gap-12 mt-14 mb-6 justify-center items-center"
      >
        <button
          :active="active == 0"
          @click="active = 0"
          class="text-white focus:text-error"
        >
          All
        </button>
        <button
          :active="active == 1"
          @click="active = 1"
          class="text-white focus:text-error"
        >
          New
        </button>
        <button
          transparent
          :active="active == 2"
          @click="active = 2"
          class="text-white focus:text-error bg-transparent"
        >
          Used
        </button>
      </section>
      <div
        class="
          flex flex-col
          lg:flex-row
          bg-white
          border
          rounded-2xl
          p-5
          lg:justify-center
          gap-2
          search-model
        "
      >
        <select
          name=""
          id=""
          class="
            rounded-lg
            shadow-md
            border
            px-2
            py-3
            outline-none
            cursor-pointer
            focus:border-error
            overflow-hidden
            w-full
          "
        >
          <option v-for="(val, i) in AllMakes" :key="i" :value="val.value">
            {{ val.items }}
          </option>
        </select>
        <select
          name=""
          id=""
          class="
            rounded-lg
            shadow-md
            border
            px-2
            py-3
            outline-none
            cursor-pointer
            focus:border-error
            overflow-hidden
            w-full
          "
        >
          <option v-for="(val, i) in AllModels" :key="i" :value="val.value">
            {{ val.items }}
          </option>
        </select>
        <select
          name=""
          id=""
          class="
            rounded-lg
            shadow-md
            border
            px-2
            py-3
            outline-none
            cursor-pointer
            focus:border-error
            overflow-hidden
            w-full
          "
        >
          <option v-for="(val, i) in Price" :key="i" :value="val.value">
            {{ val.items }}
          </option>
        </select>

        <button class="px-5 py-2 bg-error rounded-lg w-auto">
          <i class="fas fa-search text-white"></i>
        </button>
      </div>

      <div
        class="
          flex flex-col
          sm:flex-row
          lg:flex-row
          gap-8
          sm:gap-8
          lg:gap-8
          my-2
          p-1
          mt-10
          mb-16
          lg:mt-16 lg:mb-28
        "
      >
        <div class="flex w-full flex-row justify-center gap-8">
          <router-link
            to="#"
            class="
              text-white
              flex
              items-center
              justify-center
              border-2
              rounded-full
              w-20
              h-20
              border-white
              relative
              hover:border-error
            "
          >
            <img
              class="w-12 h-12"
              src="../../public/images/hatchback-car-variant-side-view-silhouette.png"
              alt=""
            />

            <p class="absolute top-20">Sedan</p>
          </router-link>
          <router-link
            to="#"
            class="
              text-white
              flex
              items-center
              justify-center
              border-2
              rounded-full
              w-20
              h-20
              border-white
              relative
              hover:border-error
            "
          >
            <img
              class="w-12 h-12"
              src="../../public/images/hatchback-car-variant-side-view-silhouette.png"
              alt=""
            />

            <p class="absolute top-20">Coupe</p>
          </router-link>
          <router-link
            to="#"
            class="
              text-white
              flex
              items-center
              justify-center
              border-2
              rounded-full
              w-20
              h-20
              border-white
              relative
              hover:border-error
            "
          >
            <img
              class="w-12 h-12"
              src="../../public/images/hatchback-car-variant-side-view-silhouette.png"
              alt=""
            />

            <p class="absolute top-20">SUV</p>
          </router-link>
        </div>
        <div class="flex flex-row justify-center gap-8 w-full">
          <router-link
            to="#"
            class="
              text-white
              flex
              items-center
              justify-center
              border-2
              rounded-full
              w-20
              h-20
              border-white
              relative
              hover:border-error
            "
          >
            <img
              class="w-12 h-12"
              src="../../public/images/hatchback-car-variant-side-view-silhouette.png"
              alt=""
            />

            <p class="absolute top-20">Hatchback</p>
          </router-link>
          <router-link
            to="#"
            class="
              text-white
              flex
              items-center
              justify-center
              border-2
              rounded-full
              w-20
              h-20
              border-white
              relative
              hover:border-error
            "
          >
            <img
              class="w-12 h-12"
              src="../../public/images/hatchback-car-variant-side-view-silhouette.png"
              alt=""
            />

            <p class="absolute top-20">Convertible</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      active: 0,
      value: "",

      AllMakes: [
        {
          value: "audi",
          items: "audi",
        },
        {
          value: "Bentiey",
          items: "Bentiey",
        },
        {
          value: "BMW",
          items: "BMW",
        },
        {
          value: "cadilla",
          items: "cadilla",
        },
        {
          value: "Chevrolet",
          items: "Chevrolet",
        },
        {
          value: "Ferrari",
          items: "Ferrari",
        },
        {
          value: "Ford",
          items: "Ford",
        },
        {
          value: "Mercedes-Benz",
          items: "Mercedes-Benz",
        },
        {
          value: "Porsche",
          items: "Porsche",
        },
      ],
      AllModels: [
        {
          value: "4-Series",
          items: "4-Series",
        },
        {
          value: "6-Series",
          items: "6-Series",
        },
        {
          value: "7-Series",
          items: "7-Series",
        },
        {
          value: "8-Series",
          items: "8-Series",
        },
        {
          value: " X1",
          items: " X1",
        },
        {
          value: " X2",
          items: " X2",
        },
        {
          value: " X3",
          items: " X3",
        },
        {
          value: " X5",
          items: " X5",
        },
        {
          value: " X7",
          items: " X7",
        },
        {
          value: " 1-Series",
          items: " 1-Series",
        },
        {
          value: " 2-Series",
          items: " 2-Series",
        },
        {
          value: " 3-Series",
          items: " 3-Series",
        },
        {
          value: " 5-Series",
          items: " 5-Series",
        },
        {
          value: " i3",
          items: " i3",
        },
        {
          value: " i8",
          items: " i8",
        },
        {
          value: "PHEV",
          items: "PHEV",
        },
        {
          value: " x4",
          items: " x4",
        },
        {
          value: " x5",
          items: " x5",
        },
        {
          value: " x6",
          items: " x6",
        },
        {
          value: " Z",
          items: " Z",
        },
      ],
      Price: [
        {
          value: "$15.000",
          items: "$15.000",
        },
        {
          value: "$30.000",
          items: "$30.000",
        },
        {
          value: "$50.000",
          items: "$50.000",
        },
        {
          value: "$50.000",
          items: "$50.000",
        },
        {
          value: "$100.000",
          items: "$100.000",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="postcss" scoped>
.banner-bg {
  background: url("../../public/images/bg-1920-new.jpg") no-repeat;
  background-size: cover;
}
.container {
  /* width: 50%; */

  padding-bottom: 24px;
}
.search-model {
  box-shadow: 0px 20px 2px rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 640px) {
  .search-model {
    width: 100%;
  }
}
@media screen and (min-width: 640px) {
  .search-model {
    width: 60%;
  }
}
</style>

