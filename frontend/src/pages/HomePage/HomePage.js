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
            <button >Add menu item
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>

            <button >Create order
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>


            <button >Shopping list
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>


            <button >Menu
              <div className="icon">
                <BiChevronRight/>
              </div>
            </button>


            <button >Contact us
              <div className="icon">
                <BiChevronRight/>
              </div>
             </button>
          </div>
        </>
    )
}


export default HomePage;