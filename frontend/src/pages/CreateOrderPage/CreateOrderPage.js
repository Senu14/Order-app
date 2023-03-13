import React from "react";
import { useState, useEffect} from "react"; 
import  ReactDOM  from "react-dom";
import { Route, Router } from "react-router-dom";
import './CreateOrderPage.scss';
import { BiChevronRight} from "react-icons/bi";



const CreateOrderPage = () => {
    return ( 
        <div className='body-create'>
          <p className="line">ORDER</p>

        <div className="days">
          <p>Create order for 
            <form action="">
              <input className="input-create" type="number"  />
            </form>
            day(s)
          </p>
        </div >

        <div className="average">
          <div className="name-sales">
            <p>Name</p>
            <p>Ave. sales/day</p>
          </div>


          <div className="menu-item">
          <select>
            <option value="Orange">Burger</option>
            <option value="Radish">Fish and Chips</option> 
          </select>
 
          <form action="">
              <input className="input-create"  type="number"  />
          </form>
          </div>
          <div>
          <button className="add">Add</button>
          </div>
        </div>

        {/*<div className="quantity">
          <p>You will create order for:</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

    </div>*/}

        <div>
          <button className="button-create">Create and go to shopping list
              <div className="icon">
                <BiChevronRight/>
              </div>
           </button>
        </div>
        </div>
     );
}
 
export default CreateOrderPage;