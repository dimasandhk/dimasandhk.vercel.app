<template>
  <div class="article mt-5">
    <div class="container mb-5">
      <div class="article-content">
        <h1 class="judul text-center" data-aos="fade-down">Dev.to Post</h1>
        <div class="row justify-content-center">
          <div
            class="col-12 col-md-12 col-lg-6"
            v-for="({ title, img, date, user, tag, url }, i) of arrArtikel"
            :key="i"
            data-aos="fade-up"
          >
            <div class="article-box mt-3">
              <img :src="img" class="w-100 mb-3 rounded" />
              <h4>
                {{ title }}
              </h4>
              <h6 class="text-muted">{{ user }} ({{ date }})</h6>
              <h6 class="text-muted">Tag: ({{ tag }})</h6>
              <a
                class="btn btn-secondary btn-block btn-sm shadow-none"
                :href="url"
                target="_blank"
              >
                Visit
              </a>
            </div>
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
    scriptURL: "https://dev.to/api/articles?username=dimasngoding",
    arrArtikel: [],
  }),
  created: async function() {
    const dataArtikel = await this.getDataArtikel();
    dataArtikel.forEach((el) => {
      this.arrArtikel.push({
        title: el.title,
        img: el.social_image,
        date: el.readable_publish_date,
        user: el.user.name,
        tag: el.tags,
        url: el.url,
      });
    });
  },
  methods: {
    getDataArtikel: function() {
      return fetch(this.scriptURL)
        .then((res) => res.json())
        .then((res) => res);
    },
  },
};
</script>

<style lang="scss">
.article {
  .article-box {
    .btn-block {
      font-weight: 700;
    }
    background-color: #27272e;
    padding: 10px 15px;
    border: 1px solid #27272e;
    border-radius: 7px;
  }
  .judul {
    font-weight: 600;
    color: #1affd6;
  }
}
</style>
