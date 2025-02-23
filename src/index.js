function handleSubmit(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Ingredients",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

let breakfastSubmit = document.querySelector("#breakfast-form");
breakfastSubmit.addEventListener("submit", handleSubmit);
