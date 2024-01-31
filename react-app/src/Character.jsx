import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacter } from "./getData";

export function Character() {
  const params = useParams();
  let characterID = params.id;
  console.log(characterID);

  let [character, setCharacter] = useState({});
  useEffect(() => {
    getCharacter(characterID).then((character) => setCharacter(character));
  }, []);

  return <h1>{character.name}</h1>;
}
