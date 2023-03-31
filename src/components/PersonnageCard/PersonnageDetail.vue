<template>
  <div class="PersonnageDetail mx-5 my-5">
    <div class="row mt-5">
      <div class="col-md-6">
        <img :src="imgSrc" :alt="nom" />
      </div>
      <div class="col-md-6">
        <h5 class="text-center">{{ nom }}</h5>
        <div class="mt-5 text-center">
          <p class="">{{ description }}</p>
        </div>
        <table class="table">
          <tbody>
            <tr>
              <td>Elément :</td>
              <td>{{ element }}</td>
            </tr>
            <tr>
              <td>Modèle :</td>
              <td>{{ model }}</td>
            </tr>
            <tr>
              <td>Type d'arme :</td>
              <td>{{ typeArme }}</td>
            </tr>
            <tr>
              <td>PV :</td>
              <td>{{ pv }}</td>
            </tr>
            <tr>
              <td>Dégâts :</td>
              <td>{{ dgt }}</td>
            </tr>
            <tr>
              <td>Dégâts critiques :</td>
              <td>{{ dgtCrit }} %</td>
            </tr>
            <tr>
              <td>Taux de critique :</td>
              <td>{{ tauxCrit }} %</td>
            </tr>
            <tr>
              <td>Bonus élémentaires :</td>
              <td>{{ dgtElementaire }} %</td>
            </tr>
            <tr>
              <td>Degat Elementaire Critique :</td>
              <td>{{ totalDgtCritElementaire }}</td>
            </tr>
            <tr>
              <td>Archonte :</td>
              <td>{{ archon }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link
      :to="{
        name: 'PersonnagesView',
      }"
    >
      <button class="btn btn-secondary">Retour</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PersonnageDetail",
  props: {
    id: String,
    description: String,
    nom: String,
    element: String,
    model: String,
    typeArme: String,
    pv: Number,
    dgt: Number,
    def: Number,
    dgtElementaire: Number,
    dgtCrit: Number,
    tauxCrit: Number,
    archon: Boolean,
    imgSrc: String,
  },
  computed: {
    totalDgtCritElementaire() {
      var attqueCrit = this.dgt * (this.dgtCrit / 100);
      return (
        this.dgt +
        attqueCrit +
        (this.dgt + attqueCrit) * (this.dgtElementaire / 100)
      );
    },
  },
};
</script>


<style scoped>
.PersonnageDetail {
  color: whitesmoke;
}

.PersonnageDetail img {
  max-width: 100%;
  display: block;
}

table {
  color: whitesmoke;
}

.table td:first-child {
  color: whitesmoke;
  font-weight: bold;
}
</style>
