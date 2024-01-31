import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilm, getFilmCharacters } from "./getData";
// import {
//   getCharacter,
//   getCharacterFilms,
//   getCharacterHomeworld,
// } from "./getData";

export function Film() {
  const params = useParams();
  let filmID = params.id;
  console.log(filmID);

  let [film, setFilm] = useState({});
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    getFilm(filmID).then((film) => setFilm(film));
  }, []);

  useEffect(() => {
    getFilmCharacters(filmID).then((characters) => setCharacters(characters));
  }, []);

  return (
    <>
      <h1>{film.title}</h1>
      <p>{film.opening_crawl}</p>
      <p>Producer(s): {film.producer}</p>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
      <h2>Appearing Characters</h2>
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
