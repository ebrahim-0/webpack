import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");

laughImg.src = laughing;

const laughBtn = document.getElementById("jokeBtn");

laughBtn.addEventListener("click", generateJoke);

generateJoke();
