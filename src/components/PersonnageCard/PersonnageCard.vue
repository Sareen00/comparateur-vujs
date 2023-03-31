<template>
  <div class="PersonnageCard">
    <div class="cartePersonnage m-4">
      <div class="row">
        <img :src="imgSrc" :alt="nom" class="img-fluid img-personnage col" />
        <div class="col">
          <h5 class="text-center namePersonnage">{{ nom }}</h5>
          <div class="mt-5 text-center">
            <p class="descriptionPersonnage">{{ description }}</p>
          </div>
        </div>
      </div>

      <div class="d-flex mt-3">
        <router-link
          class="lien"
          :to="{ name: 'PersonnageView', params: { id: nom } }"
        >
          <button class="btn btn-sm btn-info btn-block flex-fill mr-5 col">
            Détail...
          </button>
        </router-link>
        <button
          class="btn btn-sm btn-secondary flex-fill btn-block ml-2 col-3"
          @click="selectionner"
        >
          Sélectionner
        </button>

        <router-link
          v-if="$store.state.token !== null"
          :to="{ name: 'DeletePersonnage', params: { id: nom } }"
        >
          <button class="btn btn-sm btn-danger btn-block flex-fill ml-2 col">
            Supprimer
          </button>
        </router-link>
        <router-link
          v-if="$store.state.token !== null"
          :to="{ name: 'EditPersonnage', params: { id: nom } }"
        >
          <button class="btn btn-sm btn-primary btn-block flex-fill ml-3 col">
            Modifier
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PersonnageCard",
  props: {
    nom: String,
    description: String,
    imgSrc: String,
  },
  methods: {
    selectionner() {
      console.log("Ca a été clique");
      this.$emit("selectionner", this.nom);
    },
  },
};
</script>

<style scoped>
.cartePersonnage {
  overflow: hidden;
  width: 13cm;
  height: 15cm;
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

.img-personnage {
  max-width: 200px;
  max-height: 200px;
  display: block;
  align-items: center;
  width: auto;
  height: 400px;
}
</style>
