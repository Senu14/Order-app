import React from "react";
import { useState, useEffect} from "react"; 
import  ReactDOM  from "react-dom";
import { Route, Router } from "react-router-dom";
import './HomePage.scss';
import { BiChevronRight} from "react-icons/bi";



const HomePage = () => {




    return (
        <>
          <div className="homepage">
            <button >Add menu item<BiChevronRight/></button>
            <button >Create order<BiChevronRight/></button>
            <button >Shopping list<BiChevronRight/></button>
            <button >Menu<BiChevronRight/></button>
            <button >Contact us<BiChevronRight/></button>
          </div>
        </>
    )
}


export default HomePage;