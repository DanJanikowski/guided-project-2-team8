import { useState, useEffect } from "react";
import { Planets } from "./Planets";
import { Planet } from "./Planet";
import { Film } from "./Film"
import { Characters } from "./Characters";
import { Character } from "./Character";
import { getPlanets, getCharacters } from "./getData";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  let [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);
  return (
    <>
    <button>
    <Link to={`/`}>Home</Link>
    </button>
      <Routes>
        <Route
          path="/"
          element={<Characters characters={characters} />}
        ></Route>
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
      {/* <Planets /> */}
    </>
  );
}

export default App;
