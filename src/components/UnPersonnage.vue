<template>
  <div class="UnPersonnage">
    <h1>{{ nom }}</h1>
    <p>{{ description }}</p>
    <h2>Stats</h2>
    <ul>
      <li>Element: {{ element }}</li>
      <li>Vie: {{ pv }}</li>
      <li>Dégat: {{ dgt }}</li>
      <li>Défense: {{ def }}</li>
      <li>Bonus de dégat {{ element }} : {{ dgt_elementaire }}</li>
      <li>Dégat critique: {{ dgt_crit }}</li>
      <li>Taux Critique{{ taux_crit }}</li>
      <li>Le personnage est un archon: {{ archon }}</li>
      <li>chemin image: {{ img }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "UnPersonnage",
  props: {
    id: Number,
    description: String,
    nom: String,
    element: String,
    pv: Number,
    dgt: Number,
    def: Number,
    dgt_elementaire: Number,
    dgt_crit: Number,
    taux_crit: Number,
    archon: Boolean,
    imgSrc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
