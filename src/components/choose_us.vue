<template>
  <div class="ChooseUs bg-white">
    <div class="container py-14 mx-auto">
      <h1 class="text-4xl font-black text-center">Why choose us?</h1>

      <section
        class="
          my-14
          flex flex-col
          md:flex-col
          lg:flex-row
          justify-center
          items-center
          gap-5
          lg:gap-32
        "
      >
        <div class="flex flex-col md:flex-row gap-5 md:gap-32">
          <article class="p-2 text-center">
            <figure class="flex justify-center flex-col items-center">
              <div
                class="
                  flex
                  justify-center
                  items-center
                  p-3
                  rounded-full
                  w-16
                  h-16
                  whide-range
                "
              ></div>
              <figcaption class="">
                <h1
                  class="
                    mt-10
                    text-center
                    font-semibold
                    text-xl
                    whitespace-nowrap
                  "
                >
                  Wide range of brands
                </h1>
                <p class="text-gray-400 font-thin mt-10">
                  We can help with your financing plan, we can offer some tips
                  and tricks. Drive off with this dream car of yours regardless
                  of your credit history.
                </p>
              </figcaption>
            </figure>
          </article>
          <article class="p-2 text-center">
            <figure class="flex justify-center flex-col items-center">
              <div
                class="
                  flex
                  justify-center
                  items-center
                  p-3
                  rounded-full
                  w-16
                  h-16
                  whide-range
                  trusted-client
                "
              ></div>
              <figcaption class="">
                <h1
                  class="
                    mt-10
                    text-center
                    font-semibold
                    text-xl
                    whitespace-nowrap
                  "
                >
                  Trusted by our clients
                </h1>
                <p class="text-gray-400 font-thin mt-10">
                  We can help with your financing plan, we can offer some tips
                  and tricks. Drive off with this dream car of yours regardless
                  of your credit history.
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
        <div class="flex justify-center items-center">
          <article class="p-2 text-center">
            <figure class="flex justify-center flex-col items-center">
              <div
                class="
                  flex
                  justify-center
                  items-center
                  p-3
                  rounded-full
                  w-16
                  h-16
                  whide-range
                  fast-easy
                "
              ></div>
              <figcaption class="">
                <h1
                  class="
                    mt-10
                    text-center
                    font-semibold
                    text-xl
                    whitespace-nowrap
                  "
                >
                  Fast & easy financing
                </h1>
                <p class="text-gray-400 font-thin mt-10">
                  We can help with your financing plan, we can offer some tips
                  and tricks. Drive off with this dream car of yours regardless
                  of your credit history.
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="postcss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
.whide-range {
  background: #ffece6;
}
.trusted-client {
  background: #ecffe6;
}
.fast-easy {
  background: #e6f1ff;
}
</style>