<template>
  <div class="home mt-5">
    <div class="container mb-5">
      <AboutMe />
      <GithubStats />
      <SkillSet />
    </div>
    <Footer />
  </div>
</template>

<script>
import AboutMe from "../components/Home/AboutMe.vue";
import GithubStats from "../components/Home/GithubStats.vue";
import SkillSet from "../components/Home/SkillSet.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
    GithubStats,
    SkillSet,
  },
};
</script>

<style lang="scss">
.home {
  h1 {
    font-weight: 600;
  }
  .skill-set {
    .list-item-skill {
      text-align: center !important;
    }
    margin-top: 80px;
    .skillset-title {
      font-weight: 600;
    }
  }
  .github-stats {
    .gt-2 {
      width: 495px;
      height: 195px;
    }
    margin-top: 80px;
  }
  .name-me {
    color: #1affd6;
  }
}

@media only screen and (max-width: 768px) {
  .about-me {
    h1 {
      text-align: left !important;
    }
    .row {
      text-align: left !important;
    }
  }
  .github-stats {
    .row {
      text-align: left !important;
    }
  }
  .gt-stats-1 {
    width: 100% !important;
  }
  .gt-stats-aja {
    width: 100% !important;
  }
  .skill-set {
    .list-item-skill {
      h5,
      p {
        text-align: left !important;
      }
    }
    .skillset-title {
      text-align: left !important;
    }
  }
}
</style>
