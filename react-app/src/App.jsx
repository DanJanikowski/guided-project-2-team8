import { Planet } from "./Planet";
import { Film } from "./Film"
import { Characters } from "./Characters";
import { Character } from "./Character";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
    <button>
    <Link to={`/`}>Home</Link>
    </button>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
      {/* <Planets /> */}
    </>
  );
}

export default App;
