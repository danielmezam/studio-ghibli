<template>
  <div class="home">
    <div class="form">
      <search-form @formInfo="searchInfo" />
    </div>

    <div class="main-container" v-if="!error">
      <info-item v-for="card in cards" :key=" card.id" :cardInfo="card" :type="type" />
    </div>

    <div class="error" v-if="error" style="margin:auto; text-align:center;">
      <h4>No data</h4>
    </div>
  </div>
</template>

<script>
//  Components
import InfoItem from "@/components/Home/InfoItem";
import SearchForm from "@/components/Home/SearchForm";
//Axios
import axios from "axios";

//Logo
export default {
  name: "Home",
  components: {
    InfoItem,
    SearchForm
  },
  data() {
    return {
      cards: [],
      type: "films",
      error: null
    };
  },
  mounted() {
    if (
      sessionStorage.getItem("lastCategory") ||
      sessionStorage.getItem("lastSearch")
    ) {
      const category = sessionStorage.getItem("lastCategory")
        ? sessionStorage.getItem("lastCategory")
        : null;
      const search = sessionStorage.getItem("lastSearch")
        ? sessionStorage.getItem("lastSearch")
        : null;

      this.cards = [];
      this.type = category;

      if (category == "films") {
        axios
          .get(
            search !== "null" && search !== "" && search !== null
              ? `https://ghibliapi.herokuapp.com/${category}?title=${search}`
              : `https://ghibliapi.herokuapp.com/${category}`
          )
          .then(resp => {
            this.cards = resp.data;
            console.log(resp.data);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        axios
          .get(
            search !== "null" && search !== "" && search !== null
              ? `https://ghibliapi.herokuapp.com/${category}?name=${search}`
              : `https://ghibliapi.herokuapp.com/${category}`
          )
          .then(resp => {
            this.cards = resp.data;
            console.log(resp.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then(resp => {
          this.cards = resp.data;
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    searchInfo(payload) {
      console.log(payload);
      if (payload[1] == "" || payload[1] == null) {
        sessionStorage.setItem("lastSearch", payload[1]);
        sessionStorage.setItem("lastCategory", payload[0]);
        this.cards = [];
        this.type = payload[0];
        axios
          .get(`https://ghibliapi.herokuapp.com/${payload[0]}`)
          .then(resp => {
            this.cards = resp.data;
            this.error = false;
          });
      } else {
        sessionStorage.setItem("lastSearch", payload[1]);
        sessionStorage.setItem("lastCategory", payload[0]);

        this.cards = [];
        this.type = payload[0];
        axios
          .get(
            payload[0] == "films"
              ? `https://ghibliapi.herokuapp.com/${payload[0]}?title=${payload[1]}`
              : `https://ghibliapi.herokuapp.com/${payload[0]}?name=${payload[1]}`
          )
          .then(resp => {
            if (resp.data.length !== 0) {
              this.cards = resp.data;
              this.error = false;
            } else {
              this.error = true;
            }
            console.log(resp.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.home-logo {
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 10px;
}
.home-logo img {
  max-width: 100%;
}
.form {
  width: 85%;
  margin: auto;
  margin-top: 60px;
}
.main-container {
  width: 85%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
