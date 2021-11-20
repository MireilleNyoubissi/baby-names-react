import React from "react";


function BabyNamesList(props){
  
    return (
      <ul>
        {props.data.map((babyName) => (
          <li key={babyName.id}>
            {babyName.name}
          </li>
        ))}
      </ul>
    );
}


export default BabyNamesList;