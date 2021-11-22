<template>
  <div class="home">
    <header>
      <Banner />
    </header>
    <section>
      <Feature />
      <Popular />
      <Choose_us />
      <Team />
    </section>
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/banner.vue";

import Feature from "./feature.vue";
import Popular from "./popular.vue";

import Choose_us from "@/components/choose_us.vue";
import Team from "./team.vue";
import { store } from "../store/store";

export default {
  name: "Home",
  store,
  components: {
    Banner,
    Feature,
    Popular,
    Choose_us,
    Team,
  },
};
</script>
