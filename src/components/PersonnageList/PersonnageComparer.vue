<template>
  <div class="PersonnageComparer">
    <div class="d-flex justify-content-center my-4">
      <div class="Personnage1">
        <h2>{{ this.$route.params.id1 }}</h2>
        <p>Id: {{ this.personnage1._id }}</p>
        <p>description : {{ this.personnage1.description }}</p>
        <p>element : {{ this.personnage1.element }}</p>
        <p>model : {{ this.personnage1.model }}</p>
        <p>typeArme : {{ this.personnage1.typeArme }}</p>
        <p
          :class="{
            'text-danger': this.personnage1.pv < this.personnage2.pv,
            'text-success': this.personnage1.pv > this.personnage2.pv,
          }"
        >
          pv : {{ this.personnage1.pv }}
        </p>
        <p
          :class="{
            'text-danger': this.personnage1.dgt < this.personnage2.dgt,
            'text-success': this.personnage1.dgt > this.personnage2.dgt,
          }"
        >
          dgt : {{ this.personnage1.dgt }}
        </p>
        <p
          :class="{
            'text-danger': this.personnage1.def < this.personnage2.def,
            'text-success': this.personnage1.def > this.personnage2.def,
          }"
        >
          dgt : {{ this.personnage1.def }}
        </p>
        <p
          :class="{
            'text-danger': this.personnage1.dgtCrit < this.personnage2.dgtCrit,
            'text-success': this.personnage1.dgtCrit > this.personnage2.dgtCrit,
          }"
        >
          Dégat Crit : {{ this.personnage1.dgtCrit }}
        </p>
        <p
          :class="{
            'text-danger':
              this.personnage1.tauxCrit < this.personnage2.tauxCrit,
            'text-success':
              this.personnage1.tauxCrit > this.personnage2.tauxCrit,
          }"
        >
          Taux Crit : {{ this.personnage1.tauxCrit }}
        </p>
        <p
          :class="{
            'text-danger':
              this.personnage1.dgtElementaire < this.personnage2.dgtElementaire,
            'text-success':
              this.personnage1.dgtElementaire > this.personnage2.dgtElementaire,
          }"
        >
          Dégat Elémentaire : {{ this.personnage1.dgtElementaire }}
        </p>
        <p>archon : {{ this.personnage1.archon }}</p>
        <p>imgSrc : {{ this.personnage1.imgSrc }}</p>
      </div>

      <div class="barre-separation-verticale mx-5" style=""></div>

      <div class="Personnage2">
        <h2>{{ this.$route.params.id2 }}</h2>
        <p>Id: {{ this.personnage2._id }}</p>
        <p>description : {{ this.personnage2.description }}</p>
        <p>element : {{ this.personnage2.element }}</p>
        <p>model : {{ this.personnage2.model }}</p>
        <p>typeArme : {{ this.personnage2.typeArme }}</p>
        <p
          :class="{
            'stat-inferieur': this.personnage2.pv < this.personnage1.pv,
            'stat-superieur': this.personnage2.pv > this.personnage1.pv,
          }"
        >
          dgt : {{ this.personnage2.pv }}
        </p>
        <p
          :class="{
            'stat-inferieur': this.personnage2.dgt < this.personnage1.dgt,
            'stat-superieur': this.personnage2.dgt > this.personnage1.dgt,
          }"
        >
          dgt : {{ this.personnage2.dgt }}
        </p>
        <p
          :class="{
            'stat-inferieur': this.personnage2.def < this.personnage1.def,
            'stat-superieur': this.personnage2.def > this.personnage1.def,
          }"
        >
          def : {{ this.personnage2.def }}
        </p>
        <p
          :class="{
            'stat-inferieur':
              this.personnage2.dgtCrit < this.personnage1.dgtCrit,
            'stat-superieur':
              this.personnage2.dgtCrit > this.personnage1.dgtCrit,
          }"
        >
          Degat Crit : {{ this.personnage2.dgtCrit }}
        </p>
        <p
          :class="{
            'stat-inferieur':
              this.personnage2.tauxCrit < this.personnage1.tauxCrit,
            'stat-superieur':
              this.personnage2.tauxCrit > this.personnage1.tauxCrit,
          }"
        >
          Taux Crit : {{ this.personnage2.tauxCrit }}
        </p>
        <p
          :class="{
            'stat-inferieur':
              this.personnage2.dgtElementaire < this.personnage1.dgtElementaire,
            'stat-superieur':
              this.personnage2.dgtElementaire > this.personnage1.dgtElementaire,
          }"
        >
          Degat Elementaire : {{ this.personnage2.dgtElementaire }}
        </p>
        <p>archon : {{ this.personnage2.archon }}</p>
        <p>imgSrc : {{ this.personnage2.imgSrc }}</p>
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
  name: "PersonnageComparer",
  props: {
    personnage1: Object,
    personnage2: Object,
  },
};
</script>

<style scoped>
.PersonnageComparer {
  color: whitesmoke;
}
.barre-separation-verticale {
  border-left: 3px solid RGB(205, 185, 24);
  padding-left: 2px;
  border-radius: 100%;
}

.stat-inferieur {
  color: red;
}

.stat-superieur {
  color: green;
}

@media (max-width: 576px) {
  .PersonnageComparer .Personnage1,
  .PersonnageComparer .Personnage2 {
    display: block;
    width: 100%;
  }

  .barre-separation-verticale {
    display: none;
  }
}
</style>