import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

//Polyfilling
// import "core-js/stable";
// import "regenerator-runtime/runtime";

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
    recipeView.renderError();
  }
};

const controlSearchRecipes = async () => {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResults(query);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPerPage());
  } catch (error) {
    resultsView.renderError();
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchRecipes);
};

init();
