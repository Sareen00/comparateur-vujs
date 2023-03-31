<template>
  <div class="PersonnageList">
    <div class="row justify-content-center my-4">
      <div class="col-6">
        <div class="input-group">
          <input
            class="rechercheNom form-control"
            v-model="search"
            type="text"
            placeholder="Rechercher ..."
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-3">
        <router-link
          v-if="$store.state.token !== null"
          :to="{ name: 'AddPersonnage' }"
        >
          <button class="btn btn-success">Ajouter Personnage</button>
        </router-link>
        <router-link :to="{ name: 'ConnexionApp' }">
          <button class="btn btn-primary mx-2">Connexion</button>
        </router-link>
        <router-link :to="{ name: 'InscriptionApp' }">
          <button class="btn btn-secondary">Inscription</button>
        </router-link>
      </div>
    </div>

    <div class="d-flex row">
      <div
        v-for="personnage in filteredPersonnages"
        :key="personnage.id"
        class="col-md-6"
      >
        <PersonnageCard
          class="PersonnageList-item"
          :nom="personnage.nom"
          :description="personnage.description"
          :imgSrc="personnage.imgSrc"
          @selectionner="selectionnerPersonnage(personnage.nom)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PersonnageCard from "../PersonnageCard/PersonnageCard.vue";

export default {
  name: "PersonnageList",
  components: { PersonnageCard },
  data() {
    return {
      search: "",
      personnagesSelectionnes: [],
    };
  },
  props: {
    personnages: Array,
  },

  methods: {
    selectionnerPersonnage(nom) {
      if (this.personnagesSelectionnes.length < 2) {
        this.personnagesSelectionnes.push(nom);
        console.log(
          "Un personnage a été ajouté : " + this.personnagesSelectionnes
        );
        if (this.personnagesSelectionnes.length === 2) {
          // Basculer vers le composant souhaité en passant les personnages sélectionnés en paramètre dans l'URL
          this.$router.push({
            name: "ComparerPersonnages",
            params: {
              id1: this.personnagesSelectionnes[0],
              id2: this.personnagesSelectionnes[1],
            },
          });
        }
      }
    },
  },

  computed: {
    count() {
      // console.log(this.$store);
      return this.$store.state.token;
      // return "this.$store.state.count";
    },

    filteredPersonnages() {
      return this.formattedPersonnages.filter((personnage) => {
        return personnage.nom.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    formattedPersonnages() {
      // console.log("Ce qu'il y a dans personnages:" + this.personnages[0]);
      return this.personnages.map((personnage) => {
        // console.log("Voici ce qu'on recupere" + personnage._id);
        var etreArchon;
        if (personnage.archon === "true") {
          etreArchon = true;
        } else {
          etreArchon = false;
        }

        console.log(typeof etreArchon);
        return {
          ...personnage,
          id: personnage._id,
          nom: personnage.nom,
          description: personnage.description,
          element: personnage.element,
          model: personnage.model,
          typeArme: personnage.typeArme,
          pv: parseInt(personnage.pv, 10),
          dgt: parseInt(personnage.dgt, 10),
          def: parseInt(personnage.def, 10),
          taux_crit: parseFloat(personnage.tauxCrit),
          dgt_crit: parseFloat(personnage.dgtCrit),
          dgtElementaire: parseFloat(personnage.dgtElementaire),
          archon: etreArchon,
          imgSrc: personnage.imgSrc,
        };
      });
    },
  },
};
</script>


<style scoped>
.cartePersonnage {
  overflow: hidden;
  width: 13cm;
  height: 10cm;
  float: left;
}

.cartePersonnage img {
  max-width: 50%; /* Définit la largeur maximale de l'image à 100% de la largeur de la div */
  max-height: 150%; /* Définit la hauteur maximale de l'image à 100% de la hauteur de la div */
  display: block;
  align-items: center;
}

.namePersonnage {
  color: whitesmoke;
}
.descriptionPersonnage {
  color: whitesmoke;
}
</style>