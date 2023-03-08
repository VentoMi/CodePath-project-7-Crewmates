import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Deck from './components/Deck.jsx';
import Card from './components/Card';
import deck from './deck';


function App() {

  const [side, setSide] = useState(0);
  // const [cardColor, setCardColor] = useState("");
  const [cardNum, setCardNum] = useState(0);
 
  // const cardInfor = [{front: "front1-cardinfor", back: "back1"}, {front: "front2", back: "back2"}, {front: "front3", back: "back3"}, {front: "front4", back: "back4"}, {front: "front5", back: "back5"}, {front: "front6", back: "back6"}, {front: "front7", back: "back7"}, {front: "front8", back: "back8"}, {front: "front9", back: "back9"}, {front: "front10", back: "back10"}, {front: "front11", back: "back11"}];
  const cardInfor = deck;
  const randomCard = (deck) => {
      let num;
    do {
      num = (Math.floor(Math.random() * deck.length));
    } while (num == 0);
    
    setCardNum(num);
    setSide(0);
    
    if (deck[num].id === "easy") {
      document.querySelector(".cardContainer").style.backgroundColor = "green";
    }
    if (deck[num].id === "medium") {
      document.querySelector(".cardContainer").style.backgroundColor = "pink";
    }
    if (deck[num].id === "hard") {
      document.querySelector(".cardContainer").style.backgroundColor = "brown";
    }
  }

  const changeSide = () => {
    if (side == 0) {
        setSide(1);
    } else {setSide(0)};
  }

  return (
    <div className='appContainer'> 
      <h1> Neuroscience of Learning Study Quiz </h1>
      {/* <img src= {cardInfor[0].img_src}/> */}
      <h2> Number of cards: {cardInfor.length} </h2>

      <div className='cardContainer' >
      <Card id="test" click ={changeSide} img_src = {(side==1) ? "" : cardInfor[cardNum].img_src} display={side==0 ? cardInfor[cardNum].question : cardInfor[cardNum].answer} />
      <button onClick={ () => randomCard(cardInfor)} > NEXT</button>
      </div>
    </div>
// col = {cardColor} 
  )
}

export default App