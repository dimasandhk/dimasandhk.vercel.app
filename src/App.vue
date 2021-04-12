<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    Navbar,
  },
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style lang="scss"></style>
