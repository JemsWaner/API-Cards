import { jsonText } from "./json.js";

const edit = JSON.parse(jsonText);

edit["browsers"]["chrome"] = {
  name: "Firefox",
};
console.log(edit);

//////////// Api rick and morty

const INPUT = document.getElementById("numberCards");
const BUTTON = document.getElementById("button");

/////////// linking button and input number\\\\\
BUTTON.addEventListener("click", async () => {
  let randomNum = INPUT.value;

  const DIV = document.createElement("div");
  const UL = document.createElement("ul");
  UL.className = "cards-container";
  document.body.appendChild(DIV);
  DIV.appendChild(UL);

  async function callingApi(url) {
    try {
      let request = await fetch(url);
      let transform = await request.json();
      let character = await transform.image;

      return character;
    } catch (err) {
      throw new Error(err);
    }
  }

  for (let i = 1; i <= randomNum; i++) {
    const LI = document.createElement("li");
    const IMG = document.createElement("img");
    IMG.src = await callingApi(
      "https://rickandmortyapi.com/api/character/" + i
    );
    IMG.className = "images";
    UL.appendChild(LI);
    LI.appendChild(IMG);
  }
});
