import './App.css';
import React, { useState } from 'react';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import QuestionSection from './component/question-section/QuestionSection';
import { quizeData } from './component/context/QuizeData';
import { QuizeContext } from './component/context/QuizeContext';
import ScoreData from './component/score-data/ScoreData';

const App = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectOption, setSelectOption] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


  const nextQuestion = () => {
    Scorecheck();
    if (currentQuestion < quizeData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setIsFinished(true);
    }
    //setIsClicked(false);
    setSelectOption(0);
    setIsOptionSelected(false);

  }


  const Scorecheck = () => {

    if (selectOption === quizeData[currentQuestion].ans) {
      setScore(score + 1)
      console.log("Score : " + (score + 1));
    }
    else {
      console.log("wrong");
    }

  }

  return (
    <>
      <QuizeContext.Provider value={{ quizeData, currentQuestion, isClicked, setIsClicked, isOptionSelected, setIsOptionSelected, setSelectOption, isFinished, setIsFinished, selectOption, setCurrentQuestion, nextQuestion, score, setScore }}>
        {isFinished ?
          <ScoreData score={score} totalQuestion={quizeData.length} />
          :
          <>
            <Navbar />
            <QuestionSection />
            <Footer />
          </>
        }
      </QuizeContext.Provider>


    </>

  );
}

export default App;
