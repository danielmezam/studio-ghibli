<template>
  <div class="start">
    <Circles />
    <splash-button :isLoading="isLoading" />
  </div>
</template>

<script>
import SplashButton from "../components/Start/SplashButton";
import Circles from "../components/Start/Circles";

export default {
  components: {
    SplashButton,
    Circles
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 1000);
    this.isLoading = false;
  }
};
</script>

<style scoped>
body {
  overflow: hidden;
}
.start {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
  position: relative;
}
</style>

