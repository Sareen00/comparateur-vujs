<template>
  <div class="ComparerPersonnagesView">
    <PersonnageComparer :personnage1="personnage1" :personnage2="personnage2" />
  </div>
</template>

<script>
import axios from "axios";
import PersonnageComparer from "../PersonnageList/PersonnageComparer";

export default {
  name: "ComparerPersonnagesView",
  components: { PersonnageComparer },
  data() {
    return {
      personnage1: {},
      personnage2: {},
    };
  },
  created() {
    axios
      .get(
        `https://nodejs-projet.vercel.app/personnage/${this.$route.params.id1}`
      )
      .then((response) => {
        this.personnage1 = response.data;
        console.log(
          "Voici le dettail du personnage en théorie : " + this.personnage1
        );
        var etreArchon;
        if (this.personnage1.archon === "true") {
          etreArchon = true;
        } else {
          etreArchon = false;
        }
        this.personnage1._id = this.personnage1._id;
        this.personnage1.description = this.personnage1.description;
        this.personnage1.nom = this.personnage1.nom;
        this.personnage1.element = this.personnage1.element;
        this.personnage1.model = this.personnage1.model;
        this.personnage1.typeArme = this.personnage1.typeArme;
        this.personnage1.pv = parseInt(this.personnage1.pv, 10);
        this.personnage1.dgt = parseInt(this.personnage1.dgt, 10);
        this.personnage1.def = parseInt(this.personnage1.def, 10);
        this.personnage1.dgtElementaire = parseFloat(
          this.personnage1.dgtElementaire
        );
        this.personnage1.dgtCrit = parseFloat(this.personnage1.dgtCrit);
        this.personnage1.tauxCrit = parseFloat(this.personnage1.tauxCrit);
        this.personnage1.archon = etreArchon;
        this.personnage1.imgSrc = this.personnage1.imgSrc;
      })
      .catch((error) => {
        console.log("ça a vraiment pas marche");
        console.error(error);
      });

    axios
      .get(
        `https://nodejs-projet.vercel.app/personnage/${this.$route.params.id2}`
      )
      .then((response) => {
        this.personnage2 = response.data;
        console.log(
          "Voici le dettail du personnage en théorie : " + this.personnage2
        );
        var etreArchon;
        if (this.personnage2.archon === "true") {
          etreArchon = true;
        } else {
          etreArchon = false;
        }
        this.personnage2._id = this.personnage2._id;
        this.personnage2.description = this.personnage2.description;
        this.personnage2.nom = this.personnage2.nom;
        this.personnage2.element = this.personnage2.element;
        this.personnage2.model = this.personnage2.model;
        this.personnage2.typeArme = this.personnage2.typeArme;
        this.personnage2.pv = 500;
        this.personnage2.dgt = 5000;
        this.personnage2.def = parseInt(this.personnage2.def, 10);
        this.personnage2.dgtElementaire = parseFloat(
          this.personnage2.dgtElementaire
        );
        this.personnage2.dgtCrit = parseFloat(this.personnage2.dgtCrit);
        this.personnage2.tauxCrit = parseFloat(this.personnage2.tauxCrit);
        this.personnage2.archon = etreArchon;
        this.personnage2.imgSrc = this.personnage2.imgSrc;
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

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.spinner img {
  width: 50px;
  height: 50px;
}
</style>