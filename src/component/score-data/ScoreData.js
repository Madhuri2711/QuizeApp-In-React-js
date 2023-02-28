import React from 'react';
import ScoreCard from './ScoreCard';
import './ScoreData.css';


const ScoreData = (props) => {
   
    const ReloadData = () => {
        window.location.reload();
    }
    return (
        <>
         <div className="main-section" id="score-data">
        <div className="header">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-12 col-sm-12 ">
                        <img src="img/Group 1 (6).svg" className="mt-3 close-img float-end" alt="..." />

                    </div>

                </div>

            </div>
        
        </div>

        {/* Question section */}
         <div className="questio">
            <div className="container">
                <div className="card-data row mt-4">
                    <div className="col-md-12 ">
                        <img src="./img/Layer 2.svg" className="mx-auto d-block" alt='' />

                    </div>


                </div>
            </div>

            <div className="container que-text mt-5 mb-3">
                <div className="que-text">
                    <h3 className="text-center">Results of Fantasy Quiz #156</h3>

                </div>
                <div className="mt-4">
                <ScoreCard title="The Total Question" score={props.totalQuestion} img='./img/Group 1 (4).svg'/>
                <ScoreCard title="Correct Answer" score={props.score} img='./img/Group 1 (5).svg'/>
                </div>
               
                <div className="row ">
                    <div className=" d-flex d-sm-flex justify-content-evenly col-12 col-sm-12 col-lg-5 col-md-8 px-4  mx-auto ">
                        <button className="btn-2-con" onClick={ReloadData}>OKAY</button>

                    </div>
                </div>


             </div> 

        </div> 


    </div>
       

        </>
    )
}

export default ScoreData