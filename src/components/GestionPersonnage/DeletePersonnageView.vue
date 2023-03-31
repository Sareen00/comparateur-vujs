<template>
  <div class="DeletePersonnageView">
    <div class="container mt-5">
      <form @submit.prevent="submitForm">
        <div class="row mb-3">
          <p class="my-5">
            Êtes-vous sûr de vouloir supprimer le personnage "{{
              $route.params.id
            }}" ?
          </p>
        </div>
        <div class="row">
          <router-link :to="{ name: 'PersonnagesView' }">
            <button class="btn btn-secondary">Annuler</button>
          </router-link>
          <button class="btn btn-danger ml-2" type="submit">Supprimer</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DeletePersonnageView",
  data() {
    return {};
  },
  methods: {
    submitForm() {
      const token = this.$store.state.token;
      const id = this.$route.params.id;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .delete(
          `https://nodejs-projet.vercel.app/deletePersonnage/${id}`,
          config
        )
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          // Afficher un message d'erreur en cas d'échec de la requête
          console.error(error);
        });
    },
  },
};
</script>
<style>
.DeletePersonnageView {
  color: whitesmoke;
}
</style>