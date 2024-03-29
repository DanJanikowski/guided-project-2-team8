import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilm, getFilmCharacters } from "./getData";

export function Film() {
  const params = useParams();
  let filmID = params.id;

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
      <div className="filmInfo">
        <p>{film.opening_crawl}</p>
        <p>Director: {film.director}</p>
        <p>Producer(s): {film.producer}</p>
        <p>Release Date: {film.release_date}</p>
      </div>
      <h2>Appearing Characters</h2>
      <div className="btnBox">
        {characters.map((character) => {
          return (
            <button key={character.name}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </button>
          );
        })}
      </div>
    </>
  );
}
