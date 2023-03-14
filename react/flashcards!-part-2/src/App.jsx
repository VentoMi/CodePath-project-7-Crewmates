import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Deck from './components/Deck.jsx';
import Card from './components/Card';
import deck from './deck';
import AnsForm from './components/ansForm';


function App() {

  const [side, setSide] = useState(0);
  // const [cardColor, setCardColor] = useState("");
  const [cardNum, setCardNum] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [scoreCountL, setScoreCountL] = useState(0);
  const [test, setTest] = useState('');
  // const [reset, setResetVal] = useState("N");


  const cardInfor = deck;
  const randomCard = (deck) => {
      let num;
    do {
      num = (Math.floor(Math.random() * deck.length));
    } while (num == 0);
    
    setCardNum(num);
    setSide(0);
    Difficulty(cardNum);
    // setResetVal("Y")
  }

  const Difficulty = (num) => {
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

  const getNextCard = (deck) => {
    let curNum;
    curNum = cardNum;
    if (curNum == deck.length - 1) {
      curNum = 0;

    } else {
      curNum++
    }
    setCardNum(curNum)
    Difficulty(cardNum);
    setSide(0);
  }

  const getPrevCard = (deck) => {
    let curNum;
    
    curNum = cardNum;
    if (curNum==0) {
      return;
    }
    if (curNum == 1) {
      curNum = deck.length - 1;
    } else {
      curNum--
    }
    setCardNum(curNum)
    Difficulty(cardNum);
    setSide(0);

  }

  const changeSide = () => {
    if (side == 0) {
        setSide(1);
      return <AnsForm submitForm={submitForm}/>
    } else {setSide(0)};
  }

  const submitForm = (userAnswer) => {
    let correctAns = cardInfor[cardNum].answer;

    if (correctAns.toLowerCase() == userAnswer.toLowerCase()) {
      setTest("Correct!");
      setScoreCount(scoreCount + 1);
      if (scoreCount >= scoreCountL) {
      setScoreCountL(scoreCountL + 1);}

    } else {
      setTest("Retry!")
      if (scoreCount > scoreCountL){
      setScoreCountL(scoreCount);}
      setScoreCount(0);
      

      
  }
    
  }
 
  return (
    <div className='appContainer'> 
      <h1> How much do you know the human brain? 🧠  </h1>
      {/* <img src= {cardInfor[0].img_src}/> */}
      <h2> Number of cards: {cardInfor.length} </h2>

      <div className='cardContainer' >
        <h1> Current Streak 💫: {scoreCount}</h1>
        <h1> Longest Streak 💫💫💫: {scoreCountL}</h1>


      <Card id="test" click ={changeSide} img_src = {(side==1) ? "" : cardInfor[cardNum].img_src} display={side==0 ? cardInfor[cardNum].question : cardInfor[cardNum].answer} />
      
      <AnsForm borderColor={(test=="Correct!") ? "green" : "red"} visibility={(side==0) ? "visible" :"hidden"} className="answerForm" submitForm={submitForm} />     

      <button onClick={ () => getPrevCard(cardInfor)} > Previous</button>
      <button onClick={ () => randomCard(cardInfor)} > Shuffle</button>
      <button onClick={ () => getNextCard(cardInfor)} > Next</button>
     

      </div>
    </div>
  )
}

export default App