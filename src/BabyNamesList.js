import React, { useState } from 'react';

function BabyNamesList(props) {
  // const [babyName, setBabyName] = useState("");

  const [favorites, setFavorites] = useState([]);

  const addFavorites = (babyName) => {
    setFavorites(favorites.concat([babyName + '']));
  };

  return (
    <>
      <div className="div-wrap">
        <h4>Favorites: </h4>
        <p>
          {favorites.map((favorite, i) => (
            <li key={i}>{favorite + ','}</li>
          ))}
        </p>
      </div>
      <hr />
      <ul>
        {props.data.map((babyName, index) => (
          <>
            {babyName.sex === 'm' ? (
              <li
                onClick={(e) => addFavorites(babyName.name)}
                className="genderFormatBoy"
                key={babyName.id}
              >
                {babyName.name}
              </li>
            ) : (
              <li
                onClick={(e) => addFavorites(babyName.name)}
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
