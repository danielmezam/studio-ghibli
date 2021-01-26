<template>
  <form action>
    <div class="main-form">
      <select name v-model="lastCategory" :class="{ error: errorForm}" placeholder="Select a film">
        <option value="films">Films</option>
        <option value="people">People</option>
        <option value="locations">Locations</option>
        <option value="species">Species</option>
        <option value="vehicles">Vehicles</option>
      </select>

      <input type="text" placeholder="All" v-model="lastSearch" />
    </div>
    <div class="error-message">
      <span v-if="errorForm">Select category</span>
    </div>
    <div class="send-btn">
      <input type="button" value="Search" @click="sendInfo" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      lastSearch:
        sessionStorage.getItem("lastSearch") === "null"
          ? ""
          : sessionStorage.getItem("lastSearch"),
      lastCategory: sessionStorage.getItem("lastCategory"),
      errorForm: false
    };
  },
  methods: {
    sendInfo() {
      if (
        this.lastCategory !== "" &&
        this.lastCategory !== "null" &&
        this.lastCategory !== null
      ) {
        this.errorForm = false;
        this.$emit("formInfo", [this.lastCategory, this.lastSearch]);
        console.log(this.lastCategory);
      } else {
        this.errorForm = true;
      }
    }
  }
};
</script>
<style scoped>
form {
  width: 100%;
}

.main-form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form input,
form select {
  width: 48%;
  border: none;
  border-bottom: 2px solid #000;
  background-color: transparent;
  padding: 5px;
  outline: none;
  font-size: 20px;
}

form input[type="button"] {
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px;
  margin-top: 20px;
}

.error {
  border-bottom: 2px solid red;
}

.error-message {
  text-align: left;
  margin-top: 10px;
}

.error-message span {
  color: red;
  display: block;
}

@media screen and (max-width: 600px) {
  .main-form {
    flex-direction: column;
  }

  form input,
  form select {
    width: 100%;
    margin: 20px;
  }

  .send-btn {
    padding: 0;
    display: flex;
  }

  form input[type="button"] {
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 10px;
    margin-top: 20px;
  }

  .error {
    border-bottom: 2px solid red;
  }

  .error-message {
    text-align: left;
    margin-top: 10px;
  }

  .error-message span {
    color: red;
    display: block;
  }
}
</style>