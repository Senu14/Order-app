import React from "react";
import { useState, useEffect} from "react"; 
import  ReactDOM  from "react-dom";
import { Route, Router } from "react-router-dom";
import './CreateOrderPage.scss';
import { BiChevronRight} from "react-icons/bi";



const CreateOrderPage = () => {
  

const [inputList, setinputList] = useState([{item:'', amount:''}]);


const handleinputchange = (e,index) => {
const {name, value} = e.target;
const list = [...inputList];
list[index][name] = value;
setinputList(list);
}
const handleDeleteIngredient = (i) => {
  console.log("deleting")
  const newIngredients = [...inputList];
  newIngredients.splice(i, 1);
  console.log(i, newIngredients)
  setinputList(newIngredients);
};


const addMenuItem = (e) => {
  console.log(inputList)
  e.preventDefault()
  setinputList([...inputList, {item:'', amount:''}]);
}

    return ( 
        <>
          <h1 className="line">ORDER</h1>

        <form action="" onSubmit={addMenuItem}>
        <div className="days">
          <p>Create order for 
              <input className="input-create1" type="number"  />
            day(s)
          </p>
        </div >
        <div>

          <div className="name-sales">
            <p>Name</p>
            <p>Ave. sales/day</p>
          </div>

          {inputList.map ((ingredient, i) => (

            <div key={i} className="menu-item">
          <select className="food-select" name='item' onChange={ e => handleinputchange(e,i)}>
            <option value="Burger">Burger</option>
            <option value="Fish">Fish and Chips</option> 
           {/*<input   type="text" name='item' onChange={ e => handleinputchange(e,i)} /> */}
          </select>
 
              <input className="input-create2"  type="number" name='amount' onChange={ e => handleinputchange(e,i)}/>
              <p className="delete" onClick={() => handleDeleteIngredient(i)}>Del</p>
          </div>
          ))}
          <div>
          <button className="add">Add</button>
          </div>
        </div>
          </form>

      

        <div>
          <button className="button-create">Create and go to shopping list
              <div className="icon">
                <BiChevronRight/>
              </div>
           </button>
        </div>
        </>
     );
}
 
export default CreateOrderPage;