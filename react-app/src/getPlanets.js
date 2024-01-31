export async function getPlanets() {
  const url = `/api/planets`;
  let planets = await fetch(url).then((res) => res.json());
  return planets;
}
