import React, { Component } from "react";
import Auxiliar from "../../hoc/Auxiliar";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./styles.css";

// This Modal will only updates when 'props.show' updates too
// Thats why its extending React Component
// We could do the same using Hooks but I think it would be more difficulty ;p
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log("Modal did update");
    }

    render() {
        return (
            <Auxiliar>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)'
                            : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliar >
        )
    }
}

export default Modal;