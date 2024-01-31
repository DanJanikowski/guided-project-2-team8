import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilm } from "./getData";
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

  useEffect(() => {
    getFilm(filmID).then((film) => setFilm(film));
  }, []);

  return (
    <>
      <h1>{film.title}</h1>
      <p>Producer(s): {film.producer}</p>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
    </>
  );
}
