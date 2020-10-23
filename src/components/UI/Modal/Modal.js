import React from "react";
import Auxiliar from "../../hoc/Auxiliar";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./styles.css";

const Modal = (props) => {
    return (
        <Auxiliar>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliar>
    );
}

export default Modal;