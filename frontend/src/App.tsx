import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ShowBowlers from "./BowlingLeague/ShowBowlers";
import ShowTeams from "./BowlingLeague/ShowTeams";

function App() {
  return (
    <div>
      <Header />;
      <ShowBowlers />;
      <ShowTeams />;
    </div>
  );
}

export default App;
