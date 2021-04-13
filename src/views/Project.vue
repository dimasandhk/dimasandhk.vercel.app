<template>
  <div class="project mt-5">
    <div class="container mb-5">
      <h1
        class="judul text-center"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        Project
      </h1>
      <h5
        class="text-muted text-center"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        Project based on Github Api
      </h5>
      <Loading v-show="showLoading == true" />
      <container-project>
        <div class="row justify-content-center mt-4">
          <div
            class="col-12 col-md-12 col-lg-6 mt-4"
            v-for="({ name, desc, url, lang, crt, upt }, i) of arrRepos"
            :key="i"
            :data-aos="i % 2 == 0 ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
          >
            <div class="project-box">
              <h4>
                {{ name }} <span class="lang-gt">({{ lang }})</span>
              </h4>
              <h6 class="text-muted">{{ desc }}</h6>
              <h6 class="text-muted">Created: {{ dateParse(crt) }}</h6>
              <h6 class="text-muted">Last Update: {{ dateParse(upt) }}</h6>
              <a
                :href="url"
                class="btn btn-secondary btn-block shadow-none"
                target="_blank"
                >Visit</a
              >
            </div>
          </div>
        </div>
      </container-project>
    </div>
    <Footer />
  </div>
</template>

<script>
import CtProject from "../components/Home/CtProject.vue";

export default {
  data: () => ({
    arrRepos: [],
    id: 0,
    showLoading: true,
  }),
  beforeCreate() {
    document.title = "Project | @dimas-ngoding";
  },
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
          crt: el.created_at,
          upt: el.updated_at,
        });
      } else {
        this.arrRepos.push({
          id: this.id,
          name: el.name,
          desc: el.description,
          url: el.html_url,
          lang: el.language,
          crt: el.created_at,
          upt: el.updated_at,
        });
      }
    });
    this.showLoading = false;
  },
  methods: {
    getDataRepos() {
      return fetch("https://api.github.com/users/Dimas-Ngoding/repos")
        .then((res) => res.json())
        .then((res) => res);
    },
    dateParse(str) {
      return `${str.split("T")[0]}, ${str.split("T")[1].split("Z")[0]}`;
    },
  },
  components: {
    "container-project": CtProject,
  },
};
</script>

<style lang="scss" scoped>
.project {
  .lang-gt {
    color: #1affd6;
    font-weight: 600;
  }
  .project-box {
    .btn-secondary {
      font-weight: 600;
    }
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
