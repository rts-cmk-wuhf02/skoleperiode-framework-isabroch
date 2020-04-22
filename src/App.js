import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something-important">
      <h1>Adpot Me!</h1>
      <Pet name="Inu" animal="Cat" breed="Mixed" />
      <Pet name="Tsuki" animal="Dog" breed="Samoyed" />
      <Pet name="Rocky" animal="Rock" breed="Solid" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
