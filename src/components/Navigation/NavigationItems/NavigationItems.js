import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './styles.css'

const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;