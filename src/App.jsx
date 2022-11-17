import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Start from "./Components/Start";
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("PKR 0");
  const data = [
    {
      id: 1,
      question: "What is React JS?",
      answers: [
        { text: "Library", correct: true },
        { text: "Framework", correct: false },
        { text: "Backend Language", correct: false },
        { text: "Sotware", correct: false },
      ],
    },
    {
      id: 2,
      question: "Which of the following command is used to create react app?",
      answers: [
        { text: "install react-app", correct: false },
        { text: "npm create-app", correct: false },
        { text: "npx create-react-app", correct: true },
        { text: "npx react-app-create", correct: false },
      ],
    },
    {
      id: 3,
      question: "Which one is the default local host of React Js?",
      answers: [
        { text: "8080", correct: false },
        { text: "5000", correct: false },
        { text: "4000", correct: false },
        { text: "3000", correct: true },
      ],
    },
    {
      id: 4,
      question: "What is a state in React?",
      answers: [
        { text: "A permanent storage", correct: false },
        { text: "Internal storage of the component", correct: true },
        { text: "External storage of the component", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      id: 5,
      question: "What are the two ways to handle data in React?",
      answers: [
        { text: "State & Props", correct: true },
        { text: "Services & Components", correct: false },
        { text: "State & Services", correct: false },
        { text: "State & Component", correct: false },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "PKR 5000" },
        { id: 2, amount: "PKR 10000" },
        { id: 3, amount: "PKR 30000" },
        { id: 4, amount: "PKR 50000" },
        { id: 5, amount: "PKR 70000" },
        { id: 6, amount: "PKR 100000" },
        { id: 7, amount: "PKR 300000" },
        { id: 8, amount: "PKR 500000" },
        { id: 9, amount: "PKR 800000" },
        { id: 10, amount: "PKR 1000000" },
        { id: 11, amount: "PKR 2500000" },
        { id: 12, amount: "PKR 4000000" },
        { id: 13, amount: "PKR 6000000" },
        { id: 14, amount: "PKR 8000000" },
        { id: 15, amount: "PKR 10000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>

                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m,index) => (
                <li
                  key={index}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
