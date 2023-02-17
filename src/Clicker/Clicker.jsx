import React, { useState } from "react";

const Clicker = () => {

  const [num, setNum] = useState(0)
  
  function handleClick (event) {
    setNum(Math.floor(Math.random() * 10))
  }

  return ( 
    <div>
      <h1>Your number is: {num}</h1>
      <div>
        {num === 7 
        ? 'You win!' 
        : <button onClick={handleClick}>Random Number</button>
        }
      </div>
    </div>
  );
}

export default Clicker;