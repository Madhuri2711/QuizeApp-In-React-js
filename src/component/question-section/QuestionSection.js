import React, { useContext } from 'react';
import Options from './Options';
import './QuestionSection.css';
import { QuizeContext } from '../context/QuizeContext';

const QuestionSection = () => {


    const { quizeData, currentQuestion, selectOption, setSelectOption, setIsOptionSelected} = useContext(QuizeContext);


    const handleOptionSelect = (option,i) => {
        quizeData[currentQuestion].selectOption = option;
        setIsOptionSelected(true);
    }


    return (
        <>
            <div className="question question-data" id="quiz">

                <div className="que-text mx-auto w-auto">
                    <h3 id="question" >
                        {quizeData[currentQuestion].id} . {quizeData[currentQuestion].question}
                    </h3>
                </div>


                <div className="container que-text mt-5 p-0" >

                    <div className="options">

                        {quizeData[currentQuestion].option.map((option, i) => {
                            return (
                                <Options key={i} value={option}
                                 handleOptionSelect={() => handleOptionSelect(i)}
                                 SelectOption = {() => setSelectOption(i+1)}
                                 
                                 data={selectOption  !== i + 1  ?  String.fromCharCode(65 + i) :  <img  alt='' src='./img/tick.png'/> } />
                            )
                        })}

                    </div>
                </div>
               
            </div>


        </>
    )
}

export default QuestionSection
