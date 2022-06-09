import { async } from "regenerator-runtime";

export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}, (${res.status})`);

    const { recipe } = data.data;

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
    console.log(error);
  }
};
