<template>
  <div class="card">
    <div class="card-header" :class="color">
      <h3>{{filmInfo.title}} {{`(${filmInfo.release_date })`}}</h3>
    </div>

    <div class="poster">
      <img :src="filmInfo.image.image" alt />
    </div>
    <div class="content">
      <p>{{filmInfo.description }}</p>
    </div>

    <div class="more-info-films">
      <div class="ratio">
        <h4>{{`Score: ${filmInfo.rt_score} / 100`}}</h4>
      </div>
      <div class="more-btn">
        <h4>{{`Year: ${filmInfo.release_date} `}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
//Axios
import axios from "axios";

export default {
  data() {
    return {
      filmInfo: {},
      colors: [
        "color1",
        "color2",
        "color3",
        "color4",
        "color5",
        "color6",
        "color7",
        "color8",
        "color9"
      ],
      color: ""
    };
  },
  beforeMount() {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  },
  async mounted() {
    const id = this.$route.params.id;
    await axios
      .get(`https://ghibliapi.herokuapp.com/films?id=${id}`)
      .then(async resp => {
        this.filmInfo = resp.data[0];
        await axios
          .get(
            `https://www.omdbapi.com/?t=${this.filmInfo.title}&apikey=741cc2cf`
          )
          .then(resp => {
            const image = {
              image: resp.data.Poster
            };
            this.filmInfo = { ...this.filmInfo, image };
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.card {
  width: 40%;
  margin: auto;
  border-radius: 16px;
  margin-top: 25px;
  position: relative;
  background-color: #fff;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.card-header {
  font-size: 25px;
  padding: 1px;
  color: #fff;
  letter-spacing: 3px;
  border-radius: 16px 16px 0 0;
}

.poster {
  width: 50%;
  margin: auto;
  padding: 10px;
}

.content {
  padding: 10px 10px;
}

.content p {
  font-size: 18px;
  font-weight: 400;
  color: #000;
  padding: 5px;
  text-align: justify;
}

.more-info-films {
  width: 90%;
  position: absolute;
  bottom: 0%;
  left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
}

@media screen and (max-width: 600px) {
  .card {
    width: 90%;
  }

  .poster {
    width: 90%;
    margin: auto;
    padding: 10px;
    text-align: center;
  }
}

.color1 {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.color2 {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #c6ff7d 100%);
}

.color3 {
  background-color: #ff9a8b;
  background-image: linear-gradient(
    90deg,
    #ff9a8b 0%,
    #ff6a88 55%,
    #ff99ac 100%
  );
}

.color4 {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(163, 175, 243, 1) 0%,
    rgba(220, 182, 232, 1) 100.2%
  );
}

.color5 {
  background-color: #ff9a8b;
  background-image: linear-gradient(
    90deg,
    #ff9a8b 0%,
    #ff6a88 55%,
    #ff99ac 100%
  );
}

.color6 {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}

.color7 {
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
}

.color8 {
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
}

.color9 {
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
}
</style>