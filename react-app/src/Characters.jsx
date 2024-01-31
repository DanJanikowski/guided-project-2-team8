export function Characters({ characters }) {
  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      {characters.map((character) => {
        return (
          <div className="box" key={character.name}>
            <h3>{character.name}</h3>
          </div>
        );
      })}
    </>
  );
}
