import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  async function getCharacters() {
    const nCharacter = await getCharacterById(n);
    main.append(
      Character({
        name: nCharacter.name,
        imgSrc: nCharacter.image,
      })
    );
  }
  let n = 1;
  while (n < 10) {
    getCharacters();
    n++;
  }
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
