import React,{useContext} from 'react';
import './Navbar.css';
import {QuizeContext} from '../context/QuizeContext';


const Navbar = () => {

    const {quizeData,currentQuestion} = useContext(QuizeContext);
    const progressIncrese = ((currentQuestion+1) / quizeData.length) * 100 + '%';
   
    return (
        <>
            <div className='header-section mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 col-sm-4 col-md-4 col-lg-4 '>
                            <img src='./img/Group 13.svg' alt='logo' className='logo' />
                        </div>

                        <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
                            <h4 className='que-heading text-center'>Fantasy Quiz #156</h4>
                        </div>

                        <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                            <img src='./img/Group 1 (6).svg' alt='' className='close-img float-end' />

                        </div>


                    </div>

                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-4'>
                            <div className='d-flex'>
                                <div className='mobile-progresbar' id='mobile_progress'>
                                    <div className='mobile-mybar' id='mobile_mybar' style={{width:progressIncrese}}></div>
                                </div>
                                <label className='count' id='m-count'>{currentQuestion + 1  + '/' + quizeData.length} </label>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Navbar