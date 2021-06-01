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
        title: "Basic Skill",
        ket: "HTML, CSS, SCSS, Javascript"
      },
      {
        title: "Frontend Framework",
        ket: "Vue JS, Bootstrap, Tailwind, Vuetify"
      },
      {
        title: "Frontend Library",
        ket: "ReactJS (Learning), Jquery, GSAP"
      },
      {
        title: "Backend Skill",
        ket: "Node JS, Express, Hapi"
      },
      {
        title: "Database",
        ket: "Mongodb, Mongoose (Learning)"
      },
      {
        title: "Tools",
        ket: "GIT Basic CL, Figma, Photoshop"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
