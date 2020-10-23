import React from 'react';
import './styles.css'

const NavigationItem = (props) => (
    <li className="NavigationItem">
        <a className={props.active ? 'active' : null} href={props.link}>
            {props.children}
        </a>
    </li>
);

export default NavigationItem;