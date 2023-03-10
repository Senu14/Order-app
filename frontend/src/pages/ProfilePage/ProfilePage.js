import React, { useState } from "react";
import "./ProfilePage.scss";
import { BiLogOut } from 'react-icons/bi';
const ProfilePage = () => {

    return (
        <>
            <style>{'body {  background-color: #F4E9D6 }'}</style>
            <img src="/images/background.png" alt="background-logo" className="background-logo" />
            <button className="close-button">x</button>
            <div class="imagen-container">
                <img src="/images/profile.png" alt="Perfil" className="profile-image" />
            </div>

            <p className="username">Paco</p>
            
            <p className="username">Settings</p>
            

            <div className="logout">
                <BiLogOut className="i" />
            </div>
            
        </>
    );
};

export default ProfilePage;