<template>
  <div class="login">
    <div class="container">
      <section class="">
        <div class="text-center lg:text-left">
          <h1 class="font-extrabold text-4xl text-gray-900">
            Log in to your account
          </h1>
          <p class="mt-2">Welcome back! Sign in to your account</p>
        </div>
        <div class="lg:mt-10 rounded-lg py-5 social">
          <div class="flex flex-col lg:flex-row gap-3 mt-1 items-center">
            <p class="whitespace-nowrap">Continue with:</p>
            <button
              class="
                py-3
                w-full
                inline-flex
                items-center
                lg:w-auto
                shadow
                px-3
                rounded-lg
                bg-white
                btn-google
                hover:border-gray-700
                border-transparent border
                hover:border-current
              "
            >
              <i class="fab fa-google mr-3 text-error"></i>
              <span class="mx-auto">Google</span>
            </button>
            <button
              class="
                py-3
                w-full
                lg:w-auto
                inline-flex
                items-center
                shadow
                px-3
                rounded-lg
                bg-white
                btn-facebook
                hover:border-gray-700
                border-transparent border
                hover:border-current
              "
            >
              <i class="fab fa-facebook-f mr-3 text-primary"></i>
              <span class="mx-auto">Facebook</span>
            </button>
          </div>
        </div>
        <p class="text-center lg:text-left">or</p>
        <form>
          <div class="my-5 py-5 rounded-lg login-account">
            <div class="grid grid-cols-1 mt-6 gap-3">
              <input
                type="text"
                class="
                  px-6
                  py-3
                  shadow
                  rounded-md
                  form-control
                  outline-none
                  text-gray-900
                  bg-white
                "
                required
                placeholder="Username"
              />
              <input
                type="password"
                class="
                  px-6
                  py-3
                  shadow
                  rounded-md
                  form-control
                  outline-none
                  text-gray-500
                  bg-white
                "
                required
                placeholder="password"
              />

              <div class="my-4 flex lg:flex-row justify-between items-center">
                <vs-checkbox v-model="remember" color="danger">
                  Remember
                </vs-checkbox>
                <router-link class="underline" to="/"
                  >Forget password?</router-link
                >
              </div>
              <button class="btn-signin rounded-lg py-3 px-2 text-white">
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "account",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      User: {
        username: "",
        email: "",
        phome: "",
        pasword: "",
      },
      AllUsers: [],
      activate: 0,
    };
  },
  methods: {},
};
</script>
<style lang="postcss" scoped>
.btn-del {
  border: 1px solid #eee;
}
.form-control,
.result {
  /* border: 1px solid #eee; */
  /* box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.1); */
}
.btn-signup,
.btn-signin {
  width: 100px;
  max-width: 100px;
  min-width: 100px;
  background: #ff4605;
}
.login {
  background: #f2f5fb;
}
.container {
  width: 70%;
  margin: auto;
}
</style>
