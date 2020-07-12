import { useState } from "react";

const useGame = (startingSize) => {
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  const [size, setSize] = useState(startingSize);

  const nextTurn = () => {
    setTurn((turn % 2) + 1);
  };

  return { size, turn, nextTurn };
};

export default useGame;
