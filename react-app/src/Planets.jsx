// import { getPlanets } from "./getPlanets";

export function Planets({ planets }) {
  if (!planets || planets.length === 0) return undefined;
  return (
    <>
      <h1>Planets</h1>
      {planets.map((planet) => {
        return <h2 key={planet.name}>{planet.name}</h2>;
      })}
    </>
  );
}
