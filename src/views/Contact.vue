<template>
  <div class="contact mt-5">
    <div class="container contact-container">
      <h1 class="judul text-center mb-4" data-aos="fade-down">
        Get In Touch
      </h1>
      <h4 class="sub-judul text-center">
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
import Github from "../components/Svg/Github.vue";
import Yt from "../components/Svg/Yt.vue";
import Ig from "../components/Svg/Ig.vue";
import Email from "../components/Svg/Email.vue";
import Discord from "../components/Svg/Discord.vue";

export default {
  data: () => ({
    arrButtonLinkTree: [
      {
        title: "Github",
        path: "https://github.com/Dimas-Ngoding",
        ket: "Programming stuff and side projects, old and new",
        com: Github,
      },
      {
        title: "Youtube",
        path: "https://www.youtube.com/channel/UCNqSlVr9_fJ-682ILT-MBHA",
        ket: "Mostly Timelapse Documentation Video",
        com: Yt,
      },
      {
        title: "Instagram",
        path: "https://www.instagram.com/dimas.ngoding/",
        ket: "Just an account to share the screenshot of my code",
        com: Ig,
      },
      {
        title: "Email",
        path: "https://github.com/Dimas-Ngoding",
        ket: "Only when essential",
        com: Email,
      },
      {
        title: "Discord",
        path: "https://discordapp.com/users/458863525516017664/",
        ket: "Idk, i'm not so active on discord",
        com: Discord,
      },
      {
        title: "Dev.to",
        path: "https://dev.to/dimasngoding",
        ket: "Where i share articles about programming",
        com: "Null",
      },
    ],
  }),
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
