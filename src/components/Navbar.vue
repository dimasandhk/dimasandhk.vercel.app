<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">@dimas-ngoding</router-link>
      <toggle-button></toggle-button>
      <navbar-collapse>
        <router-link
          to="/"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-link"
          >Home</router-link
        >
        <router-link
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-link"
          to="/article"
          >Article</router-link
        >
        <router-link
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          class="nav-link"
          to="/contact"
          >Contact</router-link
        >
      </navbar-collapse>
    </div>
  </nav>
</template>

<script>
import ToggleButton from "./Navbar/ToggleButton.vue";
import Container from "./Navbar/Container.vue";

export default {
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
