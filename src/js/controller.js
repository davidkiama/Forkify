import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

//Polyfilling
// import "core-js/stable";
// import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // display a spinner before data arrives
    recipeView.renderSpinner();

    // 1. loading the recipe
    await model.loadRecipe(id);

    // 2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);
["hashchange", "load"].forEach((ev) => window.addEventListener(ev, controlRecipes));
