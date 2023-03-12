import React, { useState } from "react";
import "./AddMenuPage.scss";
import Header from '../../components/Header'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from 'sweetalert2';


const AddMenuPage = () => {
    const [ingredients, setIngredients] = useState([{ name: '', amount: '', unit: '' }]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
    };

    const handleDeleteIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const handleIngredientChange = (event, index, field) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        console.log('Form submitted:', ingredients);
        // Add your form submission logic here
        
        // Show SweetAlert
        Swal.fire({
          title: 'Successfully added',
          icon: 'success',
          timer: 2000
        });
      };
      
    return (
        <>
            <Header />
            <div className="form-add">
                <p className="line-add">ADD DISH</p>

                <div className="average">
                    <div className="name-sales">
                        <p>Name</p>
                    </div>

                    <div className="menu-item">
                        <select>
                            <option value="Orange">Burger</option>
                            <option value="Radish">Fish and Chips</option>
                        </select>

                    </div>

                    <div>
                        <form className="add-dish" onSubmit={handleSubmit}>
                            <div className="text-style">
                                <p className="text-1">Ingredients</p>
                                <p className="text-2">Amount</p>
                                <p className="text-2">Unit</p>
                            </div>

                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="input-container">
                                    <input
                                        className="ingredient"
                                        type="text"
                                        value={ingredient.name}
                                        onChange={(event) => handleIngredientChange(event, index, 'name')}
                                    />
                                    <input
                                        className="input-create-dish"
                                        type="number"
                                        value={ingredient.amount}
                                        onChange={(event) => handleIngredientChange(event, index, 'amount')}
                                    />
                                    <p className="text-3">g</p>
                                    <button className="minus" onClick={() => handleDeleteIngredient(index)}><AiOutlineMinus /></button>
                                    
                                </div>
                            ))}

                        </form>
                    </div>
                    <div className="button-container">
                        <button className="plus" onClick={handleAddIngredient}><AiOutlinePlus /></button>
                    </div>
                    <button type="submit" className="add" onClick={handleSubmit}>Add</button>

                </div>
            </div>

        </>
    );
};

export default AddMenuPage;
