import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Inu",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Tsuki",
      animal: "Dog",
      breed: "Samoyed",
    }),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "Rock",
      breed: "Solid",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
