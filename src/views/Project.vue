<template>
  <div class="project mt-5">
    <div class="container mb-5">
      <h1 class="judul text-center" data-aos="fade-down">
        Project
      </h1>
      <h5 class="text-muted text-center" data-aos="fade-down">
        Project based on Github Api
      </h5>
      <div class="row justify-content-center mt-4">
        <div
          class="col-12 col-md-12 col-lg-6 mt-4"
          data-aos="fade-up"
          v-for="({ name, desc, url, lang }, i) of arrRepos"
          :key="i"
        >
          <div class="project-box">
            <h4>{{ name }} ({{ lang }})</h4>
            <h6 class="text-muted">{{ desc }}</h6>
            <a
              :href="url"
              class="btn btn-secondary btn-block shadow-none"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data: () => ({
    arrRepos: [],
    id: 0,
  }),
  created: async function() {
    const data = await this.getDataRepos();
    data.forEach((el) => {
      this.id++;
      if (!el.language) {
        this.arrRepos.push({
          id: this.id,
          name: el.name,
          desc: el.description,
          url: el.html_url,
          lang: "No Lang",
        });
      } else {
        this.arrRepos.push({
          id: this.id,
          name: el.name,
          desc: el.description,
          url: el.html_url,
          lang: el.language,
        });
      }
    });
  },
  methods: {
    getDataRepos() {
      return fetch("https://api.github.com/users/Dimas-Ngoding/repos")
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  .project-box {
    height: 100%;
    background-color: #27272e;
    padding: 10px 15px;
    border-radius: 7px;
    border: none;
  }
}
h3,
h1 {
  font-weight: 600;
}
.judul {
  color: #1affd6;
}
</style>
