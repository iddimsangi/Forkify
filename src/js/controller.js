
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const showRecepies = async () => {
  try {
    const resp = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    const dataResponse = await resp.json();
    console.log(dataResponse.data.recipe);
    let myReceipe  = dataResponse.data.recipe;
    console.log(myReceipe.cooking_time);

  } catch (error) {
    alert(error);
  }
};
showRecepies();
