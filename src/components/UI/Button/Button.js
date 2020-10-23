import React from 'react';
import './styles.css'

const Button = (props) => {
    return (
        <button className={['Button', [props.btnType]].join(' ')} onClick={props.clicked} >{props.children}</button>
    );
}

export default Button;