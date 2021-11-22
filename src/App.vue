<template>
  <div>
    <nav
      :class="{ scrolled: !view.atTopOfPage }"
      class="
        flex
        justify-between
        lg:items-center
        px-2
        py-2
        lg:fixed lg:top-0 lg:left-0 lg:right-0
        animated
        text-white
      "
    >
      <div
        class="
          container
          px-2
          md:mx-auto
          flex flex-col
          lg:flex-row lg:items-center
        "
      >
        <div
          class="
            w-full
            relative
            flex
            justify-between
            items-center
            lg:w-auto lg:static lg:block lg:justify-start
            flex-wrap
          "
        >
          <router-link
            class="
              text-3xl
              leading-relaxed
              inline-block
              py-2
              whitespace-nowrap
              order-2
              font-extrabold
              mx-auto
              overflow-hidden
            "
            to="/"
          >
            <img
              src="../public/images/vehica-logo-white-retina-165x29.png"
              class="img"
              alt=""
            />
          </router-link>
          <button
            class="
              text-white
              cursor-pointer
              text-xl
              leading-none
              px-3
              py-1
              border border-solid border-transparent
              rounded
              bg-transparent
              block
              lg:hidden
              outline-none
              focus:outline-none
              order-1
            "
            type="button"
            v-on:click="toggleNavbar()"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div
          v-bind:class="{ hidden: !showMenu, flex: showMenu }"
          class="t lg:flex lg:flex-grow"
        >
          <ul class="flex flex-col gap-5 lg:flex-row lg:gap-2 list-none ml-4">
            <div class="dropdown inline-block relative">
              <button
                class="font-semibold py-2 px-1 rounded inline-flex items-center"
              >
                <span class="mr-4">Home</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  absolute
                  bg-white
                  text-gray-700
                  px-3
                  hidden
                  rounded-lg
                  shadow-2xl
                "
              >
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-t
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Mosaic
                  </router-link>
                </li>
                <hr />

                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Car Dealer</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Location</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Modern</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Classic</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Video</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Homepage Classic</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown inline-block relative">
              <button
                class="font-semibold py-2 px-1 rounded inline-flex items-center"
              >
                <span class="mr-4">Search</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  absolute
                  bg-white
                  text-gray-700
                  px-3
                  hidden
                  rounded-lg
                  shadow-2xl
                "
              >
                <li class="nav-item">
                  <router-link
                    class="py-1 px-4 block whitespace-nowrap router-link"
                    to="#"
                    >Classic - Rows</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Classic-Cards</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Map - Rows</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Map - Cards</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown inline-block relative">
              <button
                class="font-semibold py-2 px-1 rounded inline-flex items-center"
              >
                <span class="mr-4">Listing</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  absolute
                  bg-white
                  text-gray-700
                  px-3
                  hidden
                  rounded-lg
                  shadow-2xl
                "
              >
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-t
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Gallery
                  </router-link>
                </li>

                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Mosaic</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Carousel</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Private Message System</router-link
                  >
                </li>

                <hr />
              </ul>
            </div>
            <div class="dropdown inline-block relative">
              <button
                class="font-semibold py-2 px-1 rounded inline-flex items-center"
              >
                <span class="mr-4">Page</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  absolute
                  bg-white
                  text-gray-700
                  px-3
                  hidden
                  rounded-lg
                  shadow-lg
                "
              >
                <li class="inline-block relative drop">
                  <button
                    class="
                      font-semibold
                      py-2
                      px-4
                      rounded
                      inline-flex
                      items-center
                    "
                  >
                    <span class="mr-4">Blog</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </button>
                  <ul class="absolute hidden drop-item">
                    <router-link to="">Blog</router-link>
                    <router-link to="">Single Post</router-link>
                  </ul>
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="py-1 px-4 block whitespace-nowrap router-link"
                    to="#"
                    >About Us</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Contact</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Our team-simple</router-link
                  >
                </li>
                <hr />
              </ul>
            </div>
            <div class="dropdown inline-block relative">
              <button
                class="font-semibold py-2 px-1 rounded inline-flex items-center"
              >
                <span class="mr-4">More</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                class="
                  dropdown-menu
                  absolute
                  bg-white
                  text-gray-700
                  px-3
                  hidden
                  rounded-lg
                  shadow-2xl
                "
              >
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-t
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Main Features
                  </router-link>
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="py-1 px-4 block whitespace-nowrap router-link"
                    to="#"
                    >Refund Policy (Guarantee)</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Help Center (Support)</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Review</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Free Demo</router-link
                  >
                </li>
                <hr />
                <li class="nav-item">
                  <router-link
                    class="
                      rounded-b
                      py-2
                      px-4
                      block
                      router-link
                      whitespace-nowrap
                    "
                    to="#"
                    >Need Real Estate Theme?</router-link
                  >
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div class="lg:my-auto">
        <router-link
          class="
            text-white
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
            ml-auto
          "
          to="/account"
        >
          <i class="fas fa-user"></i>
        </router-link>

        <ul class="hidden lg:flex lg:flex-row gap-6">
          <li class="nav-item">
            <router-link to="/account" class="router-link whitespace-nowrap">
              <i class="far fa-user mr-3 f-icon-login"></i><span>Login</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/account" class="router-link"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/listing"
              class="whitespace-nowrap rounded-md addListing py-2 px-3"
            >
              <i class="fas fa-plus mr-2"></i>
              <span>Add listing</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "purple-navbar",
  data() {
    return {
      showMenu: false,

      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },

    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
nav {
  z-index: 10;
  background: #0f141e;
}

@media screen and (min-width: 1024px) {
  nav.scrolled {
    @apply shadow-lg;
    @apply bg-white;
    @apply text-gray-900;
  }
}
.router-link:hover {
  color: #b02212;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.addListing {
  border: 1px solid #ff4605;
}
.addListing:hover {
  background: #ff4605;
}
.f-icon-login {
  color: #ff4605;
}
.drop-item:hover {
  display: block;
}
</style>
