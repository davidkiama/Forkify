import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
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
  } catch (error) {
    //Temp error handling
    console.error(`${error}  💥💥💥💥`);
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
  } catch (error) {
    throw error;
  }
};

loadSearchResults("pizza");
