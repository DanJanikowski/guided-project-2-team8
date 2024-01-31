import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getCharacter,
  getCharacterFilms,
  getCharacterHomeworld,
} from "./getData";

export function Character() {
  const params = useParams();
  let characterID = params.id;
  console.log(characterID);

  let [character, setCharacter] = useState({});
  let [homeworld, setHomeworld] = useState({});
  let [films, setFilms] = useState([]);

  useEffect(() => {
    getCharacter(characterID).then((character) => setCharacter(character));
  }, []);

  useEffect(() => {
    getCharacterHomeworld(characterID).then((homeworld) =>
      setHomeworld(homeworld)
    );
  }, []);

  useEffect(() => {
    getCharacterFilms(characterID).then((films) => {
      console.log(films);
      setFilms(films);
    });
  }, []);

  return (
    <>
      <h1>{character.name}</h1>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Born: {character.birth_year}</p>

      <h2>Homeworld</h2>
      <button>
        <Link to={`/planets/${homeworld.id}`}>{homeworld.name}</Link>
      </button>

      <h2>Films appeared in</h2>
      {films.map((film) => {
        return (
          <button key={film.title}>
            <Link to={`/films/${film.id}`}>{film.title}</Link>
          </button>
        );
      })}
    </>
  );
}
