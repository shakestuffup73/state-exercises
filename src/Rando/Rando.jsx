import React, { useState } from "react";

const Rando = ({ maxNum }) => {
  const [num, setNum] = useState(0)

  function makeTimer(){
    setInterval(() => {
      let rand = Math.floor(Math.random() * maxNum)
      setNum(rand)
    }, 3000)
  }
  makeTimer()

  return ( 
    <>
      <h1>{num}</h1>
    </>
  );
}

export default Rando;