<template>
  <div class="ct-project">
    <slot>
      <div class="row justify-content-center">
        <div class="spinner-border text-center" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
