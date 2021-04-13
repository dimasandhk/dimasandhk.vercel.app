<template>
  <div class="skill-set">
    <div class="container">
      <h1
        class="skillset-title name-me text-center mb-3"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Skillset
      </h1>
      <div class="row mt-3">
        <div
          class="col-12 col-md-12 col-lg-12 list-item-skill"
          data-aos="fade-right"
          data-aos-duration="700"
          v-for="(item, i) of arrSkill"
          :key="i"
        >
          <h5>{{ item.title }}</h5>
          <p>{{ item.ket }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    arrSkill: [
      {
        title: "HTML and CSS",
        ket: "Bootstrap (4+), SCSS, Vuetify",
      },
      {
        title: "Javascript",
        ket: "ES5, ES6, Jquery",
      },
      {
        title: "Javascript Framework",
        ket: "Vue JS, Nuxt JS (Learning)",
      },
      {
        title: "Server Side",
        ket: "Node JS (Learning), Express (Learning)",
      },
      {
        title: "Others",
        ket: "Git (Basic Command Line)",
      },
      {
        title: "Tools",
        ket: "Figma, Photoshop",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
