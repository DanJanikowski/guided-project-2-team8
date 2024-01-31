import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacter, getCharacterHomeworld } from "./getData";

export function Character() {
  const params = useParams();
  let characterID = params.id;
  console.log(characterID);

  let [character, setCharacter] = useState({});
  let [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    getCharacter(characterID).then((character) => setCharacter(character));
  }, []);

  useEffect(() => {
    getCharacterHomeworld(character.id).then((homeworld) =>
      setHomeworld(homeworld)
    );
  }, [character]);

  return (
    <>
      <h1>{character.name}</h1>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Born: {character.birth_year}</p>

      <h2>Homeworld</h2>
      <Link>{homeworld.name}</Link>
    </>
  );
}
