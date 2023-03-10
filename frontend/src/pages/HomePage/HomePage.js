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
            <button className="buttonhomepage">Add menu item
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>

            <button className="buttonhomepage">Create order
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>


            <button className="buttonhomepage">Shopping list
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>
 

            <button className="buttonhomepage">Menu
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>


            <button className="buttonhomepage">Contact us
              <div className="icon">
                <BiChevronRight/>
              </div>
             </button>
          </div>
        </>
    )
}


export default HomePage;