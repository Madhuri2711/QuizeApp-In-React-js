import React, { useContext } from 'react';
import './Footer.css';
import { QuizeContext } from '../context/QuizeContext';

const Footer = (option) => {

   
    const { nextQuestion,isOptionSelected, currentQuestion, quizeData, } = useContext(QuizeContext);
    const progressIncrese = ((currentQuestion + 1) / quizeData.length) * 100 + '%';

 
 
    return (
        <>
  <div className="footer">
                            <div className="footer-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-8 mt-3 ">
                                            <div className="d-flex mt-2">
                                                <div className="d-progressbar" id="myProgress">
                                                    <div className="" id="myBar" style={{ width: progressIncrese }}></div>
                                                </div>
                                                <label className="count" id="count">{quizeData[currentQuestion].id + ' / ' + quizeData.length} </label>
                                            </div>
                                        </div>



                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3 ">
                                            {currentQuestion === quizeData.length - 1 ?
                                                <button type='button'
                                                    className="btn-con btn-continue-mobile align-items-center "
                                                    disabled={!isOptionSelected} 
                                                    style={{
                                                    backgroundColor: !isOptionSelected ? '#747475' : '#31CD63',
                                                    cursor: 'pointer',
                                                     }}
                                                    onClick={(() => nextQuestion())}
                                                   
                                                >FINISH</button>
                                                :
                                                <button type='button'
                                                 style={{
                                                    backgroundColor: !isOptionSelected ? '#747475' : '#31CD63',
                                                    cursor: 'pointer',
                                                     }}
                                                    className="btn-con btn-continue-mobile align-items-center "
                                                    disabled={!isOptionSelected} 
                                                    onClick={(() => nextQuestion())}
                                                >CONTINUE</button>
                                            }
                                           

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>


        </>
    )
}

export default Footer


