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
      setFilms(films);
    });
  }, []);

  return (
    <>
      <h1>{character.name}</h1>
      <div className="charStats">
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Born: {character.birth_year}</p>
      </div>

      <h2>Homeworld</h2>
      <div className="btnBox">
        <button>
          <Link to={`/planets/${homeworld.id}`}>{homeworld.name}</Link>
        </button>
      </div>

      <h2>Films appeared in</h2>
      <div className="btnBox">
        {films.map((film) => {
          return (
            <button key={film.title}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </button>
          );
        })}
      </div>
    </>
  );
}
