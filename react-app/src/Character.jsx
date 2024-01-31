import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacter, getCharacterHomeworld } from "./getData";

export function Character() {
  const params = useParams();
  let characterID = params.id;
  console.log(characterID);

  let [character, setCharacter] = useState({});
  let [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    getCharacter(characterID)
      .then((character) => setCharacter(character))
      .then(() => setHomeworld(getCharacterHomeworld(character.id)));
  }, []);

  //   useEffect(() => {
  //     getCharacterHomeworld(character.homeworld).then((homeworld) =>
  //       setHomeworld(homeworld)
  //     );
  //   }, []);

  return (
    <>
      <h1>{character.name}</h1>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Born: {character.birth_year}</p>

      <h2>Homeworld</h2>
    </>
  );
}
