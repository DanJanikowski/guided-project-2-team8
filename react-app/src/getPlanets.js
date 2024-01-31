export async function getPlanets() {
  const url = `/api/planets`;
  // pickedPerson = undefined;
  // pickedPeople = [];
  // stashedPeople = [];
  let planets = await fetch(url).then((res) => res.json());
  console.log(planets);
  return planets;
}
