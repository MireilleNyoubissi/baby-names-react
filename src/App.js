import React from "react";
import BabyNamesList from "./BabyNamesList.js";
import BabyNames from "./data/babyNames.json";
import './App.css';

function App() {
  return (
    <div className="card border border-info">
      <form>
        <input
          type="search"
          placeholder="search for name ..."
          aria-label="Search"
        />
        <i className="fa fa-female text-danger"></i>
        <i className="fa fa-male text-info"></i>
        <i className="fa fa-child text-success"></i>
      </form>
      <p>Favourites:</p>
      <hr />
      <BabyNamesList data  = {BabyNames}/>
      <hr />
    </div>
  );
}

export default App;
