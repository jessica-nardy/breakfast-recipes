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
    "You are a worldwide famous michelin chef and specialized in breakfasts. Your mission is to generate just ONE very consice and simple recipe in basic HTML. Do NOT display the word HTML in the beginning. Make sure to follow the user insctructions.";
  let prompt = `User instructions: Generate a breakfast recipe with ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let breakfastSubmit = document.querySelector("#breakfast-form");
breakfastSubmit.addEventListener("submit", handleSubmit);
