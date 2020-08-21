import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Four from "./images/4.jpg"
import One from "./images/1.jpg"
import Two from "./images/2.jpg"
import Three from "./images/3.jpg"
import Five from "./images/5.jpg"
import { ToastContainer, toast}  from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css";
function App() {

   const listOfImage = [ One , Two ,Three  , Four, Five ]
   const [counter, setCounter ] = useState(0);
    
   const previous =()=>{
       if( counter === 0 ){
         toast( "Current image is the First image", { type:"error"  }); 
       }
       else{
         setCounter( counter - 1 )
       }
   } 
   const next =()=>{
      if( counter === listOfImage.length -1 ){
        toast( "Current image is the Last image", { type:"error" });
      }
      else{
        setCounter( counter + 1)
      }

   }
    
  return (
    <div>
    
    <div className="app">
      
       <div className="container-fluid" style={{ padding: "0px" }}>
       
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <button onClick={ previous } className="btn btn-dark text-white border" >Previous</button>
            </div>
            <div className="col-4 image">
              <img  src={ listOfImage[counter] }  alt="hello"  />
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
            <button onClick={ next } className="btn btn-dark text-white border" > Next </button>
            </div>
          </div>

       </div>    
    </div>
    <ToastContainer />
    </div>
  );
}

export default App;
