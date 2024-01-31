import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Planet() {
  const params = useParams();
  let planetID = params.id;
  console.log(planetID);

  return <h1>Planet</h1>;
}
