import { useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

import logopeliculero from "./images/jugar.png";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const apiUrl = " http://www.omdbapi.com/?apikey=cf497bb5";
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <img src={logopeliculero} className="logo" alt="logotipo"></img>
        <h1>El Peliculero</h1>
        <h2>Escribe una película en el buscador y pulsa 'Enter'</h2>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}></Results>

        {typeof state.selected.Title !== "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
