import React from 'react';
import {
     HashRouter as BrowserRouter, //as Router,
     //Router,
     Routes,     
    Route,
    //Link  
} from "react-router-dom";
import Home from './home';
import Patient from './patient';
const Webpages = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element= {Home()} />
            <Route path = "/patient" element = {Patient()} />
        </Routes>
        </BrowserRouter>
    );
};
export default Webpages;