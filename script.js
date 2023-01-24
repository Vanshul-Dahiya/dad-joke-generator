const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = " n4Zo5ve1syYFx1vRtzRYrw==u55SJ9BDbzCnJjUa ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    // convert response into json format
    const data = await response.json();

    jokeEl.innerText = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(data);
  } catch (e) {
    jokeEl.innerText = ` error occurred ->  ${e} `;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(e);
  }
}

btnEl.addEventListener("click", getJoke);
