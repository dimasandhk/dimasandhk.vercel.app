<template>
  <div class="contact mt-5">
    <div class="container contact-container">
      <div class="link-to-linktree">
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
          Linktree
        </h4>
        <div class="row justify-content-center">
          <router-link
            data-aos="fade-up"
            data-aos-duration="700"
            to="/linktree"
            class="rt-link-back"
          >
            > View my linktree here</router-link
          >
        </div>
      </div>
      <container-contact>
        <Box>
          <form name="dimas-contact-form" @submit="postToSheet">
            <div class="mb-3">
              <label for="name" class="form-label">Name - Optional</label>
              <input
                type="text"
                class="form-control shadow-none"
                name="nama-pengirim"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control shadow-none"
                name="email-pengirim"
                required
              />
            </div>
            <div class="mb-3">
              <label for="pesan" class="form-label">Message</label>
              <textarea
                class="form-control shadow-none"
                rows="3"
                name="pesan-pengirim"
                required
              ></textarea>
            </div>
            <form-button v-show="!showLoading"></form-button>
            <Loading v-show="showLoading" />
          </form>
        </Box>
      </container-contact>
    </div>
    <Footer margin="mb-5" />
  </div>
</template>

<script>
// Components
import Button from "../components/Contact/FormButton.vue";
import CtContact from "../components/Contact/CtContact.vue";
import Box from "../components/Contact/BoxContact.vue";
import Loading from "../components/Contact/ButtonLoading.vue";

// Modules / library
import swal from "sweetalert";

export default {
  data: () => ({
    scriptURL: undefined,
    showLoading: false,
  }),
  beforeCreate() {
    document.title = "Contact | @dimasandhk";
  },
  methods: {
    postToSheet(e) {
      this.showLoading = true;
      const form = document.forms["dimas-contact-form"];
      e.preventDefault();
      fetch(atob(this.scriptURL), { method: "POST", body: new FormData(form) })
        .then(() => {
          try {
            swal("Thankyou", "Your message has been sent", "info", {
              timer: 4000,
            });
          } catch (e) {
            swal(
              "Sorry",
              "This contact form is currently under maintenance",
              "error",
              {
                timer: 4000,
              }
            );
          }
        })
        .catch(() => {
          swal(
            "Sorry",
            "This contact form is currently under maintenance",
            "error",
            {
              timer: 4000,
            }
          );
        })
        .finally(() => {
          form.reset();
          this.showLoading = false;
        });
    },
  },
  components: {
    "container-contact": CtContact,
    Box,
    "form-button": Button,
    Loading,
  },
  created() {
    this.scriptURL = process.env.VUE_APP_GSHEET;
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
    &:hover {
      box-shadow: rgba(0, 0, 0, 0) 0px 4px 8px 0px;
      color: #fff !important;
    }
    &:active {
      box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
    }
    &:focus {
      box-shadow: none;
    }
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
    background-color: #27272e;
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

.contact-form {
  label {
    color: #1affd6;
  }
  .form-control {
    color: #000 !important;
    font-weight: 600;
    &:focus {
      border: 1px solid #1affd6;
    }
  }
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
  padding: 30px 15px;
  background-color: #27272e;
  border-radius: 5px;
}

.rt-link-back {
  text-align: center !important;
  color: #1affd6;
  &:hover {
    color: #1affd6;
    text-decoration: underline;
  }
}

.swal-modal {
  .swal-icon--info {
    &::before,
    &::after {
      background-color: #a5dc86;
    }
    color: rgba(57, 57, 64, 0.95);
    border: 4px solid #a5dc86;
  }

  .swal-title,
  .swal-text {
    color: #fff;
  }

  .swal-button {
    border: none;
    &:hover {
      color: #fff;
      background-color: #4d4d53 !important;
    }
    background-color: #4d4d53;
    color: #fff;
    font-weight: 600;
  }
  background-color: rgba(57, 57, 64, 0.95);
}

@media only screen and (max-width: 768px) {
  .contact {
    .contact-container {
      margin-bottom: 150px;
    }
  }
}
</style>
