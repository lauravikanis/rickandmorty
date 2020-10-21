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
    const CharacterOne = await getCharacterById(5);
    main.append(
      Character({
        name: CharacterOne.name,
        imgSrc: CharacterOne.image,
      })
    );
  }
  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
