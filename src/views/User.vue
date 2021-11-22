<template>
  <div class="users">
    <section>
      <div class="flex justify-center items-center gap-2 lg:hidden">
        <button
          class="
            bg-white
            mt-10
            rounded-md
            outline-none
            border-0
            focus:bg-gray-200
            py-4
            px-16
          "
          v-on:click="ishidden = false"
        >
          Login
        </button>
        <button
          class="
            bg-white
            mt-10
            rounded-md
            outline-none
            border-0
            focus:bg-gray-200
            py-4
            px-16
          "
          v-on:click="ishidden = true"
        >
          Register
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <Login class="mt-12 lg:pt-52" />
        <Register class="mt-12 lg:pt-52 bg-gray-100 lg:bg-white" />
      </div>
    </section>
  </div>
</template>
<script>
import Login from "@/components/users/login.vue";
import Register from "@/components/users/register.vue";
export default {
  name: "User",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      ishidden: false,
      visible: false,
    };
  },
  methods: {},
};
</script>
<style lang="postcss" scoped>
.users {
  background: #f2f5fb;
}
</style>
