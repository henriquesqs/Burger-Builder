import React /*,{ useEffect }*/ from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../hoc/Auxiliar";

const OrderSummary = (props) => {

    // Just to check when this component is updating
    // useEffect(() => {
    //     console.log("Atualizou o Order");
    // })

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Toal price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;