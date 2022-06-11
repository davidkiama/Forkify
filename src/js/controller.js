import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

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

    // 1. Get the search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Display search results
    resultsView.render(model.getSearchResultsPerPage());

    // 4. Display pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.renderError();
  }
};

const controlPagination = (goToPage) => {
  // 1. Display NEW search results
  resultsView.render(model.getSearchResultsPerPage(goToPage));

  // 2. Display NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = (newServings) => {
  //update the servings
  model.updateServings(newServings);
  //update the recipe view
  recipeView.render(model.state.recipe);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchRecipes);
  paginationView.addHandlerClick(controlPagination);
};

init();
