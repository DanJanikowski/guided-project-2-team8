export async function getCharacters() {
  const url = `/api/characters`;
  let characters = await fetch(url).then((res) => res.json());
  return characters;
}

export async function getPlanets() {
  const url = `/api/planets`;
  let planets = await fetch(url).then((res) => res.json());
  return planets;
}
