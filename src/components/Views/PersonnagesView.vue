<template>
  <div class="PersonnagesView">
    <div class="spinner" v-if="!personnagesCharges">
      <img src="../../assets/loading.gif" alt="spinner" />
    </div>
    <PersonnageList :personnages="personnages" />
  </div>
</template>

<script>
import axios from "axios";
import PersonnageList from "../PersonnageList/PersonnageList";

export default {
  name: "PersonnagesView",
  components: { PersonnageList },
  data() {
    return {
      personnages: [],
      personnagesCharges: false,
    };
  },
  created() {
    axios
      .get("https://nodejs-projet.vercel.app/allpersonnage")
      .then((response) => {
        this.personnages = response.data;
        console.log(this.personnages);

        setTimeout(function () {
          console.log("Pause de 5 secondes");
        }, 30000);

        this.personnagesCharges = true;
      })
      .catch((error) => {
        console.log("ça a vraiment pas marche");
        console.error(error);
      });
  },
};

//Sur la balise form @submit.prevent quand il est submit donne une fonciton a utilise et dans la fonction on met axios post pour mettre jwt dans le store
</script>

<style>
input {
  border: 2px solid rgb(0, 0, 0);
  border-radius: 5px;
  padding: 10px;
}
</style>