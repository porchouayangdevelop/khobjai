<template>
  <div class="register bg-white">
    <div class="container">
      <section class="">
        <div class="text-center lg:text-left">
          <h1 class="font-extrabold text-4xl text-gray-900">Register</h1>
          <p class="mt-2">Create new account today.</p>
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
                  border-t
                "
                required
                placeholder="Username*"
              />
              <input
                type="email"
                class="
                  px-6
                  py-3
                  shadow
                  rounded-md
                  form-control
                  outline-none
                  text-gray-900
                  bg-white
                  border-t
                "
                required
                placeholder="Email*"
              />
              <input
                type="tel"
                class="
                  px-6
                  py-3
                  shadow
                  rounded-md
                  form-control
                  outline-none
                  text-gray-900
                  bg-white
                  border-t
                "
                required
                placeholder="Phone*"
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
                  border-t
                "
                required
                placeholder="password*"
              />
              <div class="flex items-center gap-12 mt-4">
                <vs-radio color="danger" v-model="picked" val="1">
                  Private seller
                </vs-radio>
                <vs-radio color="danger" v-model="picked" val="2">
                  Business
                </vs-radio>
              </div>
              <vs-checkbox v-model="remember" color="danger">
                I accept the
                <a href="#" class="text-error underline ml-2">
                  privacy policy</a
                >
              </vs-checkbox>

              <button class="btn-signup rounded-lg py-3 px-2 text-white">
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
      picked: 0,
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

.container {
  width: 70%;
  margin: auto;
}
</style>
