import { getCharacter } from "./getData";

export function Characters({ characters }) {
  console.log(characters);
  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      {characters.map((character) => {
        return (
          <div
            handleClick={getCharacter(character._id)}
            className="box"
            key={character.name}
          >
            <h3>{character.name}</h3>
          </div>
        );
      })}
    </>
  );
}
