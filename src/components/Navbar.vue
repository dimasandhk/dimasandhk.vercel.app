<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">@dimasandhk</router-link>
      <toggle-button></toggle-button>
      <navbar-collapse>
        <router-link
          :to="path"
          v-for="({ title, path }, i) of list"
          :key="i"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-link"
          >{{ title }}</router-link
        >
      </navbar-collapse>
    </div>
  </nav>
</template>

<script>
import ToggleButton from "./Navbar/ToggleButton.vue";
import Container from "./Navbar/Container.vue";

export default {
  data() {
    return {
      list: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Timeline",
          path: "/timeline",
        },
        {
          title: "Project",
          path: "/project",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "Article",
          path: "/article",
        },
      ],
    };
  },
  components: {
    "toggle-button": ToggleButton,
    "navbar-collapse": Container,
  },
};
</script>

<style lang="scss">
.router-link-active {
  color: #fff !important;
}
.navbar {
  border-bottom: 1px solid #35353d;
  .navbar-brand {
    font-weight: 600;
  }
  .nav-link {
    margin-right: 15px;
  }
  background-color: #16161d;
}
</style>
