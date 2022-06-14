import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async (id) => {
  try {
    const { data } = await getJSON(`${API_URL}${id}`);

    const { recipe } = data;

    //format the underscore notation to camelCase
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url,
    };

    //create new field
    if (state.bookmarks.some((bookmark) => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else state.recipe.bookmarked = false;
  } catch (error) {
    //Temp error handling
    throw error;
  }
};

export const loadSearchResults = async (query) => {
  try {
    state.search.query = query;

    const { data } = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1; //resetting the page num
  } catch (error) {
    throw error;
  }
};

export const getSearchResultsPerPage = (page = state.search.page) => {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; //0
  const end = page * state.search.resultsPerPage; //10

  return state.search.results.slice(start, end);
};

export const updateServings = (newServings) => {
  state.recipe.ingredients.forEach((ing) => {
    //newQt = oldQt * newServings / oldServings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmark = () => {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = (recipe) => {
  //Add bookmark
  state.bookmarks.push(recipe);

  //mark current bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  //Update localstorage
  persistBookmark();
};

export const removeBookmark = (id) => {
  //Remove bookmark
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);

  //mark current as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  //Update localstorage
  persistBookmark();
};

const init = () => {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

//Upload data
export const uploadRecipe = async (newRecipe) => {
  /*
  console.log(Object.entries(newRecipe));

    0: (2) ['title', 'TEST']
    1: (2) ['sourceUrl', 'TEST']
    2: (2) ['image', 'TEST']
    3: (2) ['publisher', 'TEST']
    4: (2) ['cookingTime', '23']
    5: (2) ['servings', '23']
    6: (2) ['ingredient-1', '0.5,kg,Rice']
    7: (2) ['ingredient-2', '1,,Avocado']
    8: (2) ['ingredient-3', ',,salt']
    9: (2) ['ingredient-4', '']
    10: (2) ['ingredient-5', '']
    11: (2) ['ingredient-6', '']
  */
  //filter all ingredients that are not empty strings
  const ingredients = Object.entries(newRecipe)
    .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
    .map((ing) => {
      const [quantity, unit, description] = ing[1].replaceAll(" ", "").split(",");
      return { quantity: quantity ? +quantity : null, unit, description };
    });
  console.log(ingredients);
};
