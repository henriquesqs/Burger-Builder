import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png"

import "./styles.css";

const Logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="MyBurger Logo" />
    </div>
);

export default Logo;