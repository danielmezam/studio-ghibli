<template>
  <div class="home-logo">
    <img alt="Logo" :src="logo" />
  </div>
</template>

<script>
import Logo from "../assets/logo.png";

export default {
  data() {
    return {
      logo: Logo
    };
  }
};
</script>

<style scoped>
.home-logo {
  margin-top: 60px;
}

.home-logo img {
  max-width: 100%;
}
</style>