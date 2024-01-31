import { useState, useEffect } from "react";
import "./App.css";
import { Planets } from "./Planets";
import { getPlanets } from "./getPlanets";

function App() {
  let [planets, setPlanets] = useState([]);
  useEffect(() => {
    getPlanets().then((planets) => setPlanets(planets));
  }, []);
  return (
    <>
      <Planets planets={planets} header="Planets" />
    </>
  );
}

export default App;
