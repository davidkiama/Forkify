import * as model from "./model.js";
import { MODAL_TIMEOUT_SEC } from "./config.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import bookmarksView from "./views/bookmarksView.js";
import paginationView from "./views/paginationView.js";
import addRecipeView from "./views/addRecipeView.js";

//Polyfilling
import "core-js/stable";
import "regenerator-runtime/runtime";

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // display a spinner before data arrives
    recipeView.renderSpinner();

    // 0. Upadate the active recipe
    resultsView.update(model.getSearchResultsPerPage());
    bookmarksView.update(model.state.bookmarks);

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
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = () => {
  // 1. Add or remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.removeBookmark(model.state.recipe.id);
  }

  // 2. Render the recipe view
  recipeView.update(model.state.recipe);

  // 3. Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = () => {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async (newRecipe) => {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    //Render the recipe
    recipeView.render(model.state.recipe);

    // success message
    addRecipeView.renderSuccess();

    //Re render the bookmarks
    bookmarksView.render(model.state.bookmarks);

    //change ID url
    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    //close recipe modal
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_TIMEOUT_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error);
  }
};

const init = () => {
  bookmarksView.addBookmarkHandler(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchRecipes);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
