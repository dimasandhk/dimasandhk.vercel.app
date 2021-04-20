<template>
  <button class="btn btn-block btn-loading mt-2" type="button" disabled>
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span class="sr-only">Loading...</span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  &:hover {
    color: #fff;
  }
  background-color: #393940;
  color: #fff;
  font-weight: 600;
}
</style>
