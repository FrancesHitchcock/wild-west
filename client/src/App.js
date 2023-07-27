import "./App.css";
import { useState } from "react";

import axios from "axios";

function App() {
  const [outcome, setOutcome] = useState("");

  async function getOutcome() {
    const res = await axios.get(`https://wild-west-6yku.onrender.com/survive`);
    setOutcome(res.data);
  }

  return (
    <div className="App">
      <h1>Play Wild West Here</h1>
      <button onClick={getOutcome}>Click to play!</button>
      <p className="outcome">{outcome}</p>
    </div>
  );
}

export default App;
