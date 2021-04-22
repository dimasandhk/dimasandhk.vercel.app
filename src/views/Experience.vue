<template>
  <div class="experience mt-5">
    <div class="container mb-5">
      <h1
        class="judul text-center"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        Timeline
      </h1>
      <h5
        class="text-muted text-center"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        My Experience starting from 2020 until now
      </h5>
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-md-12 col-lg-6">
          <select
            name="select-year"
            class="form-control shadow-none select-year"
            data-aos="fade-up"
            data-aos-duration="700"
            @change="changeSection()"
          >
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
      </div>
      <div
        class="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div class="col-12 col-md-12 col-lg-6 mt-4">
          <div v-if="selectedYear == '2020'">
            <h3 class="judul">2020</h3>
            <ul class="timeline text-center">
              <li v-for="({ title, date }, i) of arr2020" :key="i">
                <a href="#">{{ title }} ({{ date }})</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-lg-6">
          <div v-if="selectedYear == '2021'">
            <h3 class="judul">2021</h3>
            <ul class="timeline text-center">
              <li v-for="({ title, date }, i) of arr2021" :key="i">
                <a href="#">{{ title }} ({{ date }})</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr2020: [
        {
          title: "My first time learning programming",
          date: "28 June",
        },
        {
          title: "Bootstrap 4, Basic CSS",
          date: "5 August",
        },
        {
          title: "Flexbox, CSS Grid, etc",
          date: "21 August",
        },
        {
          title: "Basic Javascript (Variable, Condition, Looping, etc)",
          date: "2 Nov",
        },
        {
          title: "Javascript DOM",
          date: "15 Nov",
        },
      ],
      arr2021: [
        {
          title: "HTTP Request Jquery",
          date: "18 Jan",
        },
        {
          title: "Javascript Framework (Vue JS)",
          date: "6 Mar",
        },
        {
          title: "Promises, Async, Await",
          date: "31 Mar",
        },
        {
          title: "Node JS (Learning)",
          date: "15 Apr",
        },
      ],
      selectedYear: "2020",
    };
  },
  beforeCreate() {
    document.title = "Experience | @dimasandhk";
  },
  methods: {
    changeSection() {
      const selectBox = document.querySelector(".select-year");
      this.selectedYear = selectBox.options[selectBox.selectedIndex].text;
    },
  },
};
</script>

<style lang="scss">
.experience {
  ul.timeline {
    a {
      color: #1affd6;
    }
    text-align: left !important;
    & > li {
      &::before {
        content: " ";
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #1affd6;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
      }
      margin: 20px 0;
      padding-left: 20px;
    }
    &::before {
      content: " ";
      background: #d4d9df;
      display: inline-block;
      position: absolute;
      left: 29px;
      width: 2px;
      height: 100%;
      z-index: 400;
    }
    list-style-type: none;
    position: relative;
  }
  select {
    &:focus {
      border: 1px solid #1affd6;
    }
    color: #000;
    option {
      color: #000;
      font-weight: 600;
    }
    font-weight: 600;
  }
  .judul {
    font-weight: 600;
    color: #1affd6;
  }
}
</style>
