import { useState } from "react";

const Game = (props) => {

  const [score, setScore] = useState(0)
  const [gameOver, setGamerOver] = useState(false)

  return ( 
    <>
      <h1>Your score is: {score}</h1>
    </>
  );
}

export default Game;