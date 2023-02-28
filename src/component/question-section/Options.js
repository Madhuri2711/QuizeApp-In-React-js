import React,{useContext} from 'react';
import {QuizeContext} from '../context/QuizeContext';

const Options = (props) => {
  const {selectOption,isClicked, setIsClicked,setIsOptionSelected} = useContext(QuizeContext);

  const handleClick = () => {
    if(props.id && setIsOptionSelected(props.id) )
    {
      setIsClicked(true);
        setIsOptionSelected(props.id)
    }
    
    setIsClicked(false)
   

  };
 
  return (
   <>
  
     <form id="mainform">
                <div className="row m-2">
                    <div id="choice" className="p-0">
                         <button type='button' id={props.id} 
                         onClick={() => {props.SelectOption(); props.handleOptionSelect(); handleClick();}}  
                        className={`option  mt-0 d-flex d-sm-flex  col-12 col-sm-12 col-lg-5 col-md-4 mx-auto ${selectOption === props.id || isClicked ? 'check' : ''}`}>
                        <div className="circle">{props.data}</div>
                          {props.value}
                        
                        </button>
                      
                    </div>
                </div>
                
                </form>
   </>
  )
}

export default Options
