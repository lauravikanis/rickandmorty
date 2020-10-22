// export async function getCharacterById(id) {
//   const url = `https://rickandmortyapi.com/api/character/${id}`;
//   const response = await fetch(url);
//   const character = await response.json();
//   return character;
// }

export async function getCharacters(name) {
  let url = `https://rickandmortyapi.com/api/character/`;
  if (name) {
    url += `?name=${name}`;
    // hänge "name" an url an
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
