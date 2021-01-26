<template>
  <div class="main-container">
    <router-link to="/home">{{!isLoading ? 'Loading...' : 'Start'}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.main-container a {
  padding: 10px 100px;
  border: 2px solid #000;
  text-align: center;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.main-container a:hover {
  border: 2px solid #fff;
  color: #fff;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}
</style>