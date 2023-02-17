import React, { useState } from "react";

const BrokenClick = () => {

  const [clicked, setClicked] = useState(false)

  function handleClick (event) {
    setClicked(true)
  }

  return ( 
    <div>
      <h1>{clicked ? 'Clicked!' : 'Not Clicked'}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default BrokenClick;