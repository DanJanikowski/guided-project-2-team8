import { getCharacters, getFilms, getPlanets } from "./getData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Characters() {
  let [characters, setCharacters] = useState([]);
  let [films, setFilms] = useState([]);
  let [planets, setPlanets] = useState([]);
  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);
  
  useEffect(() => {
    getFilms().then((films) => setFilms(films));
  }, []);
  
  useEffect(() => {
    getPlanets().then((planets) => setPlanets(planets));
  }, []);
  return (
    <>
      <h1>Star Wars Universe Lookup</h1>
      <h2>Characters</h2>
      {characters.map((character) => {
        return (
          <button key={character.name}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </button>
        );
      })}
      <h2>Films</h2>
      {films.map((film) => {
        return (
          <button key={film.title}>
            <Link to={`/films/${film.id}`}>{film.title}</Link>
          </button>
        );
      })}
      <h2>Planets</h2>
      {planets.map((planet) => {
        return (
          <button key={planet.name}>
            <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
          </button>
        );
      })}
    </>
  );
}
