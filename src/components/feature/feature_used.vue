<template >
  <div class="feature_new">
    <div class="container mb-4">
      <section
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        <article
          class="
            cursor-pointer
            article
            bg-gray-800
            rounded-xl
            h-full
            shadow
            overflow-hidden
          "
          v-for="i in feature"
          :key="i.id"
        >
          <figure class="flex flex-col justify-between">
            <img :src="i.img" class="img" alt="" srcset="" />
            <div class="flex justify-between flex-nowrap px-4 relative">
              <button
                class="
                  w-6
                  h-6
                  inline-flex
                  justify-center
                  items-center
                  rounded-full
                  bg-transparent
                  hover:bg-white
                  -mt-8
                  border
                "
              ></button>
              <div
                class="
                  bottom-2
                  -mt-8
                  ml-auto
                  bg-transparent
                  border
                  rounded-md
                  h-6
                  w-10
                  text-white
                "
              ></div>
            </div>
            <figcaption class="px-4 mt-3">
              <p class="text-gray-300 whitespace-pre-line">{{ i.title }}</p>
              <h4 class="text-gray-50 font-bold text-xl">{{ i.price }}</h4>
              <hr class="mt-3 bg-gray-500" />
            </figcaption>
            <div class="action flex flex-row px-4 my-6 gap-2">
              <div class="rounded-md bg-error px-2 text-white">2021</div>
              <div class="text-gray-400 font-thin">Automatic</div>
              <div class="text-gray-400 font-thin">Diesel</div>
            </div>
          </figure>
        </article>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: ` ./Chevrolet.png`,
      feature: [
        {
          id: 1,
          title: "BMW 8-Series 2-door coupe grey",
          price: "$62.000",
          img: "/images/bmw8.png",
        },
        {
          id: 2,
          title: "Chevrolet Camaro 2-door convertible",
          price: "$40.000",
          img: "/images/Chevrolet.png",
        },
        {
          id: 3,
          title: "Ferrari LaFerrari 2-door coupe red",
          price: "$810.000",
          img: "/images/Ferrari.png",
        },
        {
          id: 4,
          title: "Audi A8 4-door sedan silver",
          price: "$70.000",
          img: "/images/Audi.png",
        },
        {
          id: 5,

          title: "Mercedes-Benz S-class 2-door couple",
          price: "$76.000",
          img: "/images/mrec.png",
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
@media screen and (min-width: 640px) {
  .img:hover {
    transition: 1s transform;
    transform: scale(1.1);
  }
}
</style>