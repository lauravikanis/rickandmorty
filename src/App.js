import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Search from "./components/Search";
import Header from "./components/Header";

import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  let lastName = null;
  let nextPage = null;
  const header = Header();

  const LoadMoreButton = createElement("button", {
    className: "button",
    innerText: "Load More!",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });
  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer, LoadMoreButton],
  });

  async function loadCharacters(name, page) {
    const characters = await getCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    // characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);

    nextPage = characters.info.next?.match(/\d+/)[0];
    LoadMoreButton.disabled = !characters.info.next;
    lastName = name;
    // Reappend loadMoreButton to avoid scrolling
    main.append(LoadMoreButton);
  }

  const search = Search({
    onchange: (value) => {
      characterContainer.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();

  const container = createElement("div", {
    children: [header, search, main],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      LoadMoreButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      LoadMoreButton.click();
    }
  });
  return container;
}

export default App;
