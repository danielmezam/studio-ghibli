<template>
  <div class="main-container">
    <ul class="circles-container">
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
    </ul>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.circles-container {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}

.circle {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background-color: #ff9a8b;
  background-image: linear-gradient(
    90deg,
    #ff9a8b 0%,
    #ff6a88 55%,
    #ff99ac 100%
  );
  animation-name: float;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  bottom: -150px;
}

.circle:first-child {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0;
}

.circle:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 3s;
  animation-duration: 10s;
}

.circle:nth-child(3) {
  left: 70%;
  width: 40px;
  height: 40px;
  animation-delay: 0s;
}

.circle:nth-child(4) {
  left: 5%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 20s;
}

.circle:nth-child(5) {
  left: 0%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
  animation-duration: 10s;
}

.circle:nth-child(6) {
  left: 45%;
  width: 70px;
  height: 70px;
  animation-delay: 2s;
}

.circle:nth-child(7) {
  left: 35%;
  width: 50px;
  height: 50px;
  animation-delay: 1s;
  animation-duration: 9s;
}

.circle:nth-child(8) {
  left: 65%;
  width: 25px;
  height: 25px;
  animation-delay: 4s;
}

.circle:nth-child(9) {
  left: 75%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
}

.circle:nth-child(10) {
  left: 90%;
  width: 30px;
  height: 30px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>