import { useState } from "react";
import Program from "./components/Program/Program";
import "./App.css";

function App() {
  const [programs, setPrograms] = useState([
    {
      number: 1,
      pieces: 20,
      theorique: 40,
    },
    {
      number: 2,
      pieces: 10,
      theorique: 20,
    },
    {
      number: 3,
      pieces: 36,
      theorique: 40,
    },
    {
      number: 4,
      pieces: 21,
      theorique: 46,
    },
    {
      number: 5,
      pieces: 20,
      theorique: 40,
    },
    {
      number: 6,
      pieces: 18,
      theorique: 49,
    },
    {
      number: 7,
      pieces: 18,
      theorique: 49,
    },
    {
      number: 8,
      pieces: 18,
      theorique: 49,
    },
    {
      number: 9,
      pieces: 18,
      theorique: 49,
    },
    {
      number: 10,
      pieces: 18,
      theorique: 49,
    },
  ]);
  return (
    <div>
      <div className="programs">
        {programs.map((element, key) => (
          <Program
            key={key}
            number={element.number}
            pieces={element.pieces}
            theorique={element.theorique}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
