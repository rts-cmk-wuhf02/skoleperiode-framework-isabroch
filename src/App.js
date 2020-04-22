const Pet = ({ name, species, breed }) => {
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
      species: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Tsuki",
      species: "Dog",
      breed: "Samoyed",
    }),
    React.createElement(Pet, {
      name: "Rocky",
      species: "Rock",
      breed: "Solid",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
