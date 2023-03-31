import Vue from "vue";
import Router from "vue-router";
import PersonnagesView from "@/components/Views/PersonnagesView";
import PersonnageView from "@/components/Views/PersonnageView";
import ComparerPersonnagesView from "@/components/Views/ComparerPersonnagesView";
import ConnexionView from "@/components/Views/ConnexionView";
import InscriptionView from "@/components/Views/InscriptionView";
import AddPersonnageView from "@/components/GestionPersonnage/AddPersonnageView";
import DeletePersonnageView from "@/components/GestionPersonnage/DeletePersonnageView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PersonnagesView",
      component: PersonnagesView
    },
    {
      path: "/personnage/:id",
      name: "PersonnageView",
      component: PersonnageView
    },

    {
      path: "/comparer/:id1/:id2",
      name: "ComparerPersonnages",
      component: ComparerPersonnagesView
    },
    {
      path: "/connexionCompte",
      name: "ConnexionApp",
      component: ConnexionView
    },
    {
      path: "/inscription",
      name: "InscriptionApp",
      component: InscriptionView
    },
    {
      path: "/ajouterPersonnage",
      name: "AddPersonnage",
      component: AddPersonnageView
    },
    {
      path: "/supprimerPersonnage/:id",
      name: "DeletePersonnage",
      component: DeletePersonnageView
    },
    {
      path: "/modifierPersonnage/:id",
      name: "EditPersonnage",
      component: AddPersonnageView
    }
  ]
});
