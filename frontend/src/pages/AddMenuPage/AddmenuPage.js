import React, { useState } from "react";
import "./AddMenuPage.scss";
import Header from '../../components/Header'
import { BiChevronRight } from 'react-icons/bi';
const AddMenuPage = () => {

    return (
        <>
        <Header/>
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

                    <form action="">
                        <input className="input-create" type="number" />
                    </form>
                </div>
                <div>
                    <button className="add">Add</button>
                </div>
            </div>

            <div>
                <button className="button-create">Create and go to shopping list
                    <div className="icon">
                        <BiChevronRight />
                    </div>
                </button>
            </div>
        </>

    );
};

export default AddMenuPage;