<template>
  <div :class="color" class="card">
    <!-- Cambiamos el titulo según la categoría -->

    <div class="title">
      <!-- Films -->
      <h3 v-if="type == 'films'">{{cardInfo.title}} {{`(${cardInfo.release_date })`}}</h3>

      <!-- People -->
      <h3 v-if="type == 'people'">{{cardInfo.name}}</h3>
      <h5 v-if="type == 'people'">{{`(${cardInfo.age }) years old`}}</h5>

      <!-- Locations -->
      <h3 v-if="type == 'locations'">{{cardInfo.name}}</h3>

      <!-- Species -->
      <h3 v-if="type == 'species'">{{cardInfo.name}} {{`(${cardInfo.classification })`}}</h3>

      <!-- Vehicles -->
      <h3 v-if="type == 'vehicles'">{{cardInfo.name}} {{`(${cardInfo.vehicle_class })`}}</h3>
    </div>

    <!-- Cambiamos descripción según la categoría -->

    <div class="content">
      <!-- Films -->
      <p v-if="type == 'films'">{{cardInfo.description | stringFilter}}</p>

      <!-- Locations -->

      <ul v-if="type == 'locations'">
        <li>
          <p>Climate: {{cardInfo.climate}}</p>
        </li>
        <li>
          <p>Terrain: {{cardInfo.terrain}}</p>
        </li>
        <li>
          <p>Surface water: {{cardInfo.surface_water}}</p>
        </li>
      </ul>

      <!-- Species -->

      <ul v-if="type == 'species'">
        <li>
          <p>Eye color: {{cardInfo.eye_colors}}</p>
        </li>
        <li>
          <p>Hair color: {{cardInfo.hair_colors}}</p>
        </li>
      </ul>

      <!-- People -->

      <ul v-if="type == 'people'">
        <li>
          <p>Gender: {{cardInfo.gender}}</p>
        </li>
        <li>
          <p>Eye color: {{cardInfo.eye_color}}</p>
        </li>
        <li>
          <p>Hair color: {{cardInfo.hair_color}}</p>
        </li>
      </ul>

      <!-- Vehicles -->
      <p v-if="type == 'vehicles'">{{cardInfo.description | stringFilter}}</p>
    </div>

    <div :class="[type == 'films' ? 'more-info-films' : 'more-info']" v-if="type == 'films'">
      <div class="ratio">
        <h4>{{`Score: ${cardInfo.rt_score} / 100`}}</h4>
      </div>
      <div class="more-btn">
        <router-link :to="{name: 'Film', params: {id: cardInfo.id}}">More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardInfo", "type"],
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
  beforeMount() {
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
  margin-top: 12px;
  position: relative;
  margin-bottom: 12px;
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

.content ul {
  list-style: none;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  flex-direction: column;
}

.content ul li {
  width: 100%;
  margin: auto;
  text-align: center;
}

.content ul li p {
  text-align: center;
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