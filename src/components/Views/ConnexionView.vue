<template>
  <div class="ConnexionView">
    <form class="p-3" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Connexion</button>
    </form>
    <p v-if="message" class="mt-3">{{ message }}</p>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "ConnexionView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("email : " + this.email);
      console.log("password : " + this.password);

      axios
        .post("https://nodejs-projet.vercel.app/connexion", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const jwt = response.data.jwt;
          console.log("JWT récupéré :", jwt);
          this.$store.commit("setToken", jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
          this.message = "Email ou mot de passe incorrect";
        });
    },
  },
};
</script>


<style>
.ConnexionView {
  color: whitesmoke;
}
</style>