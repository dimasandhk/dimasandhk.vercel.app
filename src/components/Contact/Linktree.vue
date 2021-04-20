<template
  ><div class="contact mt-5">
    <div class="container contact-container">
      <h1
        class="judul text-center mb-4"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        Get In Touch
      </h1>
      <h4
        class="sub-judul text-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Linktree - Contact
      </h4>
      <p class="text-center" data-aos="fade-up" data-aos-duration="700">
        Everywhere I am on the Internet, in one neatly-organised list!
      </p>
      <div class="row justify-content-center">
        <router-link
          data-aos="fade-up"
          data-aos-duration="700"
          to="/contact"
          class="text-center rt-link-back"
          >Back To Contact</router-link
        >
      </div>
      <div class="row justify-content-center">
        <div
          class="col-12 col-md-12 col-lg-7 text-center"
          v-for="({ title, path, ket }, i) of arrButtonLinkTree"
          :key="i"
        >
          <contact-button
            :path="path"
            :animate="i % 2 == 0 ? 'fade-right' : 'fade-left'"
          >
            <template #button>
              {{ title }}
            </template>
            <template #para>
              {{ ket }}
            </template>
          </contact-button>
        </div>
      </div>
    </div>
    <Footer margin="mb-5" />
  </div>
</template>

<script>
import ContactButton from "../Home/CtButton.vue";

export default {
  data: () => ({
    arrButtonLinkTree: [
      {
        title: "Github",
        path: "https://github.com/dimasandhk",
        ket: "Programming stuff and side projects, old and new",
      },
      {
        title: "Youtube",
        path: "https://www.youtube.com/channel/UCNqSlVr9_fJ-682ILT-MBHA",
        ket: "Mostly Timelapse Documentation Video",
      },
      {
        title: "Instagram",
        path: "https://www.instagram.com/dimas.ngoding/",
        ket: "Just an account to share the screenshot of my code",
      },
      {
        title: "Email",
        path: "mailto:dimasandhikadiputra@gmail.com",
        ket: "Only when essential",
      },
      {
        title: "Discord",
        path: "https://discordapp.com/users/458863525516017664/",
        ket: "Idk why i put this, i'm not so active on discord",
      },
      {
        title: "Dev.to",
        path: "https://dev.to/dimasngoding",
        ket: "Where i share articles about programming",
      },
    ],
  }),
  components: {
    "contact-button": ContactButton,
  },
};
</script>

<style lang="scss" scoped>
.rt-link-back {
  text-align: center !important;
  color: #1affd6;
  &:hover {
    text-decoration: underline;
  }
}
</style>
