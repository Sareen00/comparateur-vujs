<template>
  <div class="AddPersonnageView">
    <div class="container mt-5">
      <h1>{{ nom }}</h1>
      <form @submit.prevent="submitForm">
        <div class="row mb-3">
          <div v-if="this.$route.params.id == undefined" class="col">
            <label for="nom" class="form-label">Nom</label>
            <input
              type="text"
              class="form-control"
              id="nom"
              v-model="nom"
              required
            />
          </div>
          <div class="col">
            <label for="description" class="form-label">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              v-model="description"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="element" class="form-label">Element</label>
            <select
              class="form-control form-select-lg"
              id="element"
              v-model="element"
              required
            >
              <option selected disabled value=""></option>
              <option value="dendro">Dendro</option>
              <option value="pyro">Pyro</option>
              <option value="cryo">Cryo</option>
              <option value="anemo">Anemo</option>
              <option value="hydro">Hydro</option>
              <option value="geo">Geo</option>
            </select>
          </div>
          <div class="col">
            <label for="model" class="form-label">Model</label>
            <select
              class="form-control form-select-lg"
              id="model"
              v-model="model"
              required
            >
              <option selected disabled value=""></option>
              <option value="grand">Grand</option>
              <option value="moyen">Moyen</option>
              <option value="petit">Petit</option>
            </select>
          </div>
          <div class="col">
            <label for="typeArme" class="form-label">Type d'arme</label>
            <select
              class="form-control form-select-lg"
              id="typeArme"
              v-model="typeArme"
              required
            >
              <option selected disabled value=""></option>
              <option value="epee">Epee</option>
              <option value="claymore">Claymore</option>
              <option value="catalyseur">Catalyseur</option>
              <option value="lance">Lance</option>
              <option value="arc">Arc</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="pv" class="form-label">Points de vie</label>
            <input
              type="number"
              class="form-control"
              id="pv"
              v-model="pv"
              required
            />
          </div>
          <div class="col">
            <label for="dgt" class="form-label">Dégâts</label>
            <input
              type="number"
              class="form-control"
              id="dgt"
              v-model="dgt"
              required
            />
          </div>
          <div class="col">
            <label for="def" class="form-label">Défense</label>
            <input
              type="number"
              class="form-control"
              id="def"
              v-model="def"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="tauxCrit" class="form-label"
              >Taux de critique (%)</label
            >
            <input
              type="number"
              class="form-control"
              id="tauxCrit"
              v-model="tauxCrit"
              required
            />
          </div>
          <div class="col">
            <label for="dgtCrit" class="form-label">Dégâts critiques (%)</label>
            <input
              type="number"
              class="form-control"
              id="dgtCrit"
              v-model="dgtCrit"
              required
            />
          </div>
          <div class="col">
            <label for="dgtElementaire" class="form-label"
              >Dégâts élémentaires (%)</label
            >
            <input
              type="number"
              class="form-control"
              id="dgtElementaire"
              v-model="dgtElementaire"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="archon" class="form-label">Archon</label>
            <select
              class="form-control form-select-lg"
              id="archon"
              v-model="archon"
              required
            >
              <option selected disabled value=""></option>
              <option value="vrai">Vrai</option>
              <option value="faux">Faux</option>
            </select>
          </div>

          <div class="col">
            <label for="imgSrc" class="form-label">imgSrc </label>
            <input
              type="text"
              class="form-control"
              id="imgSrc"
              v-model="imgSrc"
              required
            />
          </div>
        </div>

        <div class="row my-2 mb-5">
          <button
            v-if="this.$route.params.id == undefined"
            class="btn btn-success"
            type="submit"
          >
            Ajouter
          </button>
          <button
            v-if="this.$route.params.id !== undefined"
            class="btn btn-success"
            type="submit"
          >
            Modifier
          </button>
          <router-link
            :to="{
              name: 'PersonnagesView',
            }"
          >
            <button class="btn btn-secondary ml-3">Annuler</button>
          </router-link>
        </div>
      </form>

      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPersonnageView",
  data() {
    return {
      nom: "",
      description: "",
      element: "",
      model: "",
      typeArme: "",
      pv: "",
      dgt: "",
      def: "",
      tauxCrit: "",
      dgtCrit: "",
      dgtElementaire: "",
      archon: "",
      imgSrc: "",

      message: "",
    };
  },
  created() {
    if (this.$route.params.id !== undefined) {
      console.log("Ceci est le nom: " + this.$route.params.id);

      axios
        .get(
          `https://nodejs-projet.vercel.app/personnage/${this.$route.params.id}`
        )
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

          this.nom = personnage.nom;
          this.description = personnage.description;
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
    }
  },
  methods: {
    submitForm() {
      // Récupérer le token JWT dans le store
      const token = this.$store.state.token;

      // Configurer l'en-tête de la requête avec le token JWT
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Envoyer les données dans le corps de la requête
      const data = {
        nom: this.nom,
        description: this.description,
        element: this.element,
        model: this.model,
        typeArme: this.typeArme,
        pv: this.pv,
        dgt: this.dgt,
        def: this.def,
        tauxCrit: this.tauxCrit,
        dgtCrit: this.dgtCrit,
        dgtElementaire: this.dgtElementaire, // Ajout de la variable dgtElementaire
        archon: this.archon,
        imgSrc: this.imgSrc,
      };

      console.log("nom:" + this.nom);
      console.log("description:" + this.description);
      console.log("element:" + this.element);
      console.log("model:" + this.model);
      console.log("typeArme:" + this.typeArme);
      console.log("pv:" + this.pv);
      console.log("dgt:" + this.dgt);
      console.log("def:" + this.def);
      console.log("tauxCrit:" + this.tauxCrit);
      console.log("dgtCrit:" + this.dgtCrit);
      console.log("dgtElementaire:" + this.dgtElementaire);
      console.log("archon:" + this.archon);
      console.log("imgSrc:" + this.imgSrc);

      // Envoyer la requête POST à l'API
      axios
        .post("https://nodejs-projet.vercel.app/addpersonnage", data, config)
        .then((response) => {
          // Afficher un message de confirmation
          this.message = "Personnage ajouté avec succès !";
          this.$router.push("/");
        })
        .catch((error) => {
          // Afficher un message d'erreur en cas d'échec de la requête
          this.message = "Erreur lors de l'ajout du personnage.";
          console.error(error);
        });
    },
  },
};
</script>
<style>
.AddPersonnageView {
  color: whitesmoke;
}
</style>