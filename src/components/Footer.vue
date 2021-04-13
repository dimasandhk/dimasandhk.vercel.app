<template>
  <hr />
  <footer class="text-center" :class="margin">
    Code licensed under the MIT License
  </footer>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      default: "mb-3",
    },
  },
};
</script>

<style lang="scss" scoped>
hr {
  color: #acacac !important;
  background-color: #acacac !important;
}
footer {
  color: #acacac;
}
</style>
