import { useState, useEffect } from "react";
import { Planets } from "./Planets";
import { Characters } from "./Characters";
import { getPlanets, getCharacters } from "./getData";

function App() {
  let [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);
  return (
    <>
      <Characters characters={characters} />
      {/* <Planets /> */}
    </>
  );
}

export default App;
