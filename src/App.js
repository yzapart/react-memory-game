import "./App.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);

  function flipCard(index) {
    console.log(activeCards);
    if (activeCards.length === 0) {
      setActiveCards([index]);
    } else if (activeCards.length === 1) {
      setActiveCards([...activeCards, index]);
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if (cards[firstIndex] === cards[secondIndex]) {
        setFoundPairs([...foundPairs, firstIndex, secondIndex]);
        setTimeout(() => {
          setActiveCards([]);
        }, 300);
      } else {
        setTimeout(() => {
          setActiveCards([]);
        }, 300);
      }
    }
  }

  return (
    <div>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;
          return (
            <div
              className={"card-outer " + (flippedToFront ? "flipped" : "")}
              onClick={() => flipCard(index)}
              key={index}
            >
              <div className="card">
                <div className="front">
                  <img src={card} alt="" />
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
