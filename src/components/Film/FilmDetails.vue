<template>
  <div :class="color" class="card">
    <div class="card-header">
      <h3>{{cardInfo.title}} {{`(${cardInfo.release_date })`}}</h3>
    </div>

    <div class="content">
      <p>{{cardInfo.description }}</p>
    </div>

    <div class="all-info">
      <p>Director: {{cardInfo.director}}</p>
      <p></p>
    </div>

    <div class="more-info-films">
      <div class="ratio">
        <h4>{{`Score: ${cardInfo.rt_score} / 100`}}</h4>
      </div>
      <div class="more-btn">
        <h4>{{`Year: ${cardInfo.release_date} `}}</h4>
      </div>
    </div>

    <div class="poster">
      <!-- <img :src="cardInfo.image.image" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["film"],
  data() {
    return {
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
  mounted() {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
};
</script>

<style scoped>
.card {
  width: 30%;
  height: 380px;
  border-radius: 16px;
  padding: 10px;
  margin-top: 25px;
  position: relative;
}

.title {
  width: 80%;
  margin: auto;
}

.title h3 {
  font-size: 25px;
  color: #fff;
  letter-spacing: 3px;
  /* text-transform: uppercase; */
}

.title h5 {
  font-size: 18px;
  color: #fff;
  letter-spacing: 3px;
  /* text-transform: uppercase; */
}

.content {
  padding: 0px 10px;
}

.content p {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding: 5px;
  text-align: justify;
}

.more-info-films {
  width: 90%;
  position: absolute;
  bottom: 20px;
  left: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.more-info {
  width: 90%;
  position: absolute;
  bottom: 20px;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.more-btn a {
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
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