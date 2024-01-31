import { getCharacter } from "./getData";
import { Link } from "react-router-dom";

export function Characters({ characters }) {
  console.log(characters);
  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      {characters.map((character) => {
        return (
          <button key={character.name}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </button>
        );
      })}
    </>
  );
}
