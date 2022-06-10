import { API_URL } from "./views/config";
import { getJSON } from "./views/helpers";

export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const { data } = await getJSON(`${API_URL}/${id}`);

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
