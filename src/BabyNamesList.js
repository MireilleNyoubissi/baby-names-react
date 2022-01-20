import React, { useState } from "react";


function BabyNamesList(props){
  
  const [babyName, setBabyName] = useState("");
  
  const [addFavorite, setAddFavorite] = useState([]);

  const add = (e) => {
    setAddFavorite([addFavorite].concat([babyName]));
  }

    return (
      <>
        <ul>
          <p>
            Favorites:
            {addFavorite.map((v, i) => (
              <li key={i}>{babyName}</li>
            ))}
            
          </p>
        </ul>
        <hr />
        <ul>
          {props.data.map((babyName, index) => (
            <>
              {babyName.sex === 'm' ? (
                <li
                  onClick={(e) => add(setBabyName(babyName.name))}
                  className="genderFormatBoy"
                  key={babyName.id}
                >
                  {babyName.name}
                </li>
              ) : (
                <li
                  onClick={(e) => add(setBabyName(babyName.name))}
                  className="genderFormatGirl"
                  key={babyName.id}
                >
                  {babyName.name}
                </li>
              )}
            </>
          ))}
        </ul>
      </>
    );
}


export default BabyNamesList;