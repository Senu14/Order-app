import React from "react";
import { useState, useEffect} from "react"; 
import  ReactDOM  from "react-dom";
import { Route, Router } from "react-router-dom";
import './ShoppingListPage.scss';




const ShoppingListPage = () => {
    return (  
        <>
        <div className="shopping-container">

          <p className="underline-shop">SHOPPING LIST</p>

          <div className="shopping-a">
            <p>Name</p>
            <p>Ingredients</p>
            <p>Qty</p>
          </div>
        </div>
        </>
     );
}
 
export default ShoppingListPage;