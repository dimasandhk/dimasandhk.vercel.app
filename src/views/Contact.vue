<template>
  <div class="contact mt-5">
    <div class="container mb-5">
      <h1 class="judul text-center mb-4" data-aos="fade-down">
        Linktree - Contact
      </h1>
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-7" data-aos="fade-up">
          <a
            target="_blank"
            href="https://github.com/Dimas-Ngoding"
            class="btn text-light github-link btn-lg btn-block shadow-none mt-3"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCNqSlVr9_fJ-682ILT-MBHA"
            class="btn text-light youtube-link btn-lg btn-block shadow-none mt-3"
          >
            Youtube
          </a>
          <a
            target="_blank"
            href="https://dev.to/dimasngoding"
            class="btn text-light github-link btn-lg btn-block shadow-none mt-3"
          >
            Dev.To
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/dimas.ngoding/"
            class="btn text-light instagram-link btn-lg btn-block shadow-none mt-3"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data: () => ({
    arrButtonLinkTree: [
      {
        title: "Github",
        class: "github-link",
      },
      {
        title: "Instagram",
        class: "instagram-link",
      },
    ],
  }),
};
</script>

<style lang="scss">
.contact {
  .github-link {
    &:hover {
      background-color: #1b1f23;
    }
    background-color: #1b1f23;
  }
  .instagram-link {
    &:hover {
      background-color: #a04299;
    }
    background-color: #a04299;
  }
  .youtube-link {
    &:hover {
      background-color: #ff0000;
    }
    background-color: #ff0000;
  }
  .btn-secondary {
    border: none;
  }
  .judul {
    font-weight: 600;
    color: #1affd6;
  }
}
</style>
