<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">@dimas-ngoding</router-link>
      <toggle-button></toggle-button>
      <navbar-collapse>
        <a class="nav-link active" href="#"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Article</a>
        <a class="nav-link" href="#">Contact</a>
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
