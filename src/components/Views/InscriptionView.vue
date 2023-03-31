<template>
  <div class="InscriptionView">
    <form class="p-3" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          class="form-control form-control-sm"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form-control form-control-sm"
          v-model="password"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm password:</label>
        <input
          type="password"
          class="form-control form-control-sm"
          v-model="confirmPassword"
          required
        />
      </div>
      <div class="row">
        <button type="submit" class="btn btn-primary">Incription</button>
        <router-link
          :to="{
            name: 'PersonnagesView',
          }"
        >
          <button class="btn btn-secondary ml-3">Annuler</button>
        </router-link>
      </div>
    </form>
    <p v-if="message" class="mt-3">{{ message }}</p>
  </div>
</template>




<script>
import axios from "axios";

export default {
  name: "InscriptionView",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("email : " + this.email);
      console.log("password : " + this.password);
      console.log("ConfirmPassword : " + this.confirmPassword);

      axios
        .post("https://nodejs-projet.vercel.app/inscription", {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        })
        .then((response) => {
          this.$router.push("/");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            this.message = error.response.data.error;
          } else {
            this.message = "Une erreur est survenue lors de la requête.";
          }
        });
    },
  },
};
</script>


<style>
.InscriptionView {
  color: whitesmoke;
}
</style>