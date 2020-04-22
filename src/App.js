import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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
