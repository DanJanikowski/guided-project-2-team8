import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPlanet } from "./getData";

export function Planet() {
  const params = useParams();
  let planetID = params.id;
  console.log(planetID);

  let [planet, setPlanet] = useState({});

  useEffect(() => {
    getPlanet(planetID).then((planet) => {
      console.log(planet);
      setPlanet(planet);
    });
  }, []);

  return (
    <>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Gravity: {planet.gravity}</p>
    </>
  );
}
