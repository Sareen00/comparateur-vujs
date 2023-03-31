<template>
  <div class="PersonnagesView">
    <PersonnageDetail
      :nom="nom"
      :description="description"
      :element="element"
      :model="model"
      :typeArme="typeArme"
      :pv="pv"
      :dgt="dgt"
      :def="def"
      :tauxCrit="tauxCrit"
      :dgtCrit="dgtCrit"
      :dgtElementaire="dgtElementaire"
      :archon="archon"
      :imgSrc="imgSrc"
    />
  </div>
</template>

<script>
import axios from "axios";
import PersonnageDetail from "../PersonnageCard/PersonnageDetail.vue";

export default {
  name: "PersonnageView",
  components: { PersonnageDetail },
  data() {
    return {
      personnageId: this.$route.params.id,

      id: "",
      description: "",
      nom: "",
      element: "",
      model: "",
      typeArme: "",
      pv: null,
      dgt: null,
      def: null,
      dgtElementaire: null,
      dgtCrit: null,
      tauxCrit: null,
      archon: "",
      imgSrc: "",
    };
  },
  created() {
    axios
      .get(`https://nodejs-projet.vercel.app/personnage/${this.personnageId}`)
      .then((response) => {
        var personnage = response.data;
        console.log(
          "Voici le dettail du personnage en théorie : " + personnage
        );
        var etreArchon;
        if (personnage.archon === "true") {
          etreArchon = true;
        } else {
          etreArchon = false;
        }

        this.id = personnage._id;
        this.description = personnage.description;
        this.nom = personnage.nom;
        this.element = personnage.element;
        this.model = personnage.model;
        this.typeArme = personnage.typeArme;
        this.pv = parseInt(personnage.pv, 10);
        this.dgt = parseInt(personnage.dgt, 10);
        this.def = parseInt(personnage.def, 10);
        this.dgtElementaire = parseFloat(personnage.dgtElementaire);
        this.dgtCrit = parseFloat(personnage.dgtCrit);
        this.tauxCrit = parseFloat(personnage.tauxCrit);
        this.archon = etreArchon;
        this.imgSrc = personnage.imgSrc;
      })
      .catch((error) => {
        console.log("ça a vraiment pas marche");
        console.error(error);
      });
  },
};
</script>

<style>
.PersonnageView {
  color: whitesmoke;
}
</style>
