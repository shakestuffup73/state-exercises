import { useState } from "react";
import Rando from "../Rando/Rando";

const Game = (props) => {

  const [gameOver, setGamerOver] = useState(false)

  return ( 
    <>
      <h1>Your score is: <Rando maxNum={10}/></h1>
    </>
  );
}

export default Game;