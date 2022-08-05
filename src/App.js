import React, { useState }from "react";
import BabyNamesList from "./BabyNamesList.js";
import BabyNames from "./data/babyNames.json";
import './App.css';

function App() {
  const [babyNames, setBabyNames] = useState(BabyNames.sort((a, b) => a.name.localeCompare(b.name)));

  function searchBabyNames(nameText){
  setBabyNames(BabyNames.filter(v => v.name.toLowerCase().includes(nameText)))
  }

  return (
    <div className=" form-wrap card border border-info">
      <form>
        <input
          onKeyUp={(e) => searchBabyNames(e.currentTarget.value.toLowerCase())}
          type="search"
          placeholder="Search for name ..."
          aria-label="Search"
        />
        <i className="fa fa-female text-danger"></i>
        <i className="fa fa-male text-info"></i>
        <i className="fa fa-child text-success"></i>
      </form>
      <BabyNamesList data={babyNames} />
      <hr />
    </div>
  );
}

export default App;
