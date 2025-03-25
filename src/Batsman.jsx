import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingles = () => {
    const updatedSingles = runs + 1;
    setRuns(updatedSingles);
  };

  const handleFour = () => {
    const updatedFour = runs + 4;
    setRuns(updatedFour);
  };
  const handleSix = () => {
    const updatedSix = runs + 6;
    const sixCount = sixes + 1;
    setSixes(sixCount);
    setRuns(updatedSix);
  };
  return (
    <div className="card">
      {runs > 50 && <p>You Score 50</p>}
      <h3>Player: Bangladesh</h3>
      <p><small>total sixes: {sixes}</small></p>
      <h3>Score: {runs}</h3>
      <button onClick={handleSingles}>1 Run</button>
      <button onClick={handleFour}>4 Run</button>
      <button onClick={handleSix}>6 Run</button>
    </div>
  );
}
