import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './styles.css'

const Toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <div className="Toolbar-Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;