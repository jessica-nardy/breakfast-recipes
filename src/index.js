function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function handleSubmit(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "8t7b43fadd5ba0704f357ba3a35e30o0";
  let context =
    "You are a worldwide famous michelin chef, specialized in breakfasts which is also talented with words. Your mission is to generate just ONE very consice and simple recipe in basic HTML and written in a fun, but professional tone. Do NOT display the word HTML in the beginning. Also do NOT display ANY sentence in the beginning and at the end, just the recipe, please. Make sure to follow the user insctructions.";
  let prompt = `User instructions: Generate a breakfast recipe with ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink"> 💡 Generating recipe with ${userInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let breakfastSubmit = document.querySelector("#breakfast-form");
breakfastSubmit.addEventListener("submit", handleSubmit);
