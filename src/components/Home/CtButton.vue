<template>
  <div class="item-ct" data-aos-duration="1000" :data-aos="animate">
    <a
      target="_blank"
      :href="path"
      class="btn text-light github-link btn-lg btn-block mt-3"
    >
      <slot name="button"></slot>
    </a>
    <p class="judul mt-2">
      <slot name="para"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    animate: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
