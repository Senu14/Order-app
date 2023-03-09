import React, { useState } from "react";
import "./ProfilePage.scss";

const ProfilePage = () => {

    return (
        <>
            <style>{'body {  background-color: #F4E9D6 }'}</style>
            <img src="/images/background.png" alt="background-logo" className="background-logo" />
            <button className="close-button">x</button>
            <img src="/images/profile.jpg" alt="Perfil" className="profile-image" />
            <h1>Nombre de usuario</h1>
            <button>Logout</button>
        </>
    );
};

export default ProfilePage;