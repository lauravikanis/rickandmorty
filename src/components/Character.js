import { createElement } from "../utils/elements";
import "./character.css";

function Character({ name, imgSrc }) {
  const title = createElement("div", {
    innertext: name,
  });

  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
  });

  const container = createElement("div", {
    className: "character",
    children: [title, avatar],
  });
  return container;
}
export default Character;
