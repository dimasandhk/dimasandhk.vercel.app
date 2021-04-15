<template>
  <div class="contact mt-5">
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
        Social media, etc.
      </h4>
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
import ContactButton from "../components/Home/CtButton.vue";

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
        path: "https://github.com/dimasandhk",
        ket: "Only when essential",
      },
      {
        title: "Discord",
        path: "https://discordapp.com/users/458863525516017664/",
        ket: "Idk, i'm not so active on discord",
      },
      {
        title: "Dev.to",
        path: "https://dev.to/dimasngoding",
        ket: "Where i share articles about programming",
      },
    ],
  }),
  beforeCreate() {
    document.title = "Contact | @dimasandhk";
  },
  components: {
    "contact-button": ContactButton,
  },
};
</script>

<style lang="scss">
.contact {
  .contact-container {
    margin-bottom: 80px;
  }
  .sub-judul {
    font-weight: 600;
  }
  .github-link {
    font-weight: 600;
    &:hover {
      background-color: #1b1f23;
    }
    background-color: #1b1f23;
  }
  .instagram-link {
    font-weight: 600;
    &:hover {
      background-color: #a04299;
    }
    background-color: #a04299;
  }
  .youtube-link {
    font-weight: 600;
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

@media only screen and (max-width: 768px) {
  .contact {
    .contact-container {
      margin-bottom: 150px;
    }
  }
}
</style>
