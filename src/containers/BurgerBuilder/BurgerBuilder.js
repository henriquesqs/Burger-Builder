import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Auxiliar from "../../components/hoc/Auxiliar";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    });

    // hook to control the total price of our burger
    const [totalPrice, setTotalPrice] = useState(2);

    // hook to control if we can purchase
    const [purchaseable, setPurchaseable] = useState(false);

    // hook to control wheter we are purchasing a burger or not
    const [purchasing, setPurchasing] = useState(false);

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        alert('You continue!');
    }

    const updatePurchaseState = (newIngredients) => {

        const sum = Object.keys(newIngredients).map(igKey => {
            return newIngredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setPurchaseable(sum > 0); // sets purchaseable to true if sum > 0 or false otherwise
    }

    const addIngredientHandler = (type) => {

        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;

        setTotalPrice(newPrice);
        setIngredients(updatedIngredients);
        updatePurchaseState(updatedIngredients);

    }

    const removeIngredientHandler = (type) => {

        const oldCount = ingredients[type];

        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = totalPrice;
            const newPrice = oldPrice - priceDeduction;

            setTotalPrice(newPrice);
            setIngredients(updatedIngredients);
            updatePurchaseState(updatedIngredients);
        }
    }

    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
        <Auxiliar>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary
                    price={totalPrice}
                    purchaseCancelled={purchaseCancelHandler}
                    purchaseContinued={purchaseContinueHandler}
                    ingredients={ingredients}
                />
            </Modal>
            <Burger ingredients={ingredients} />  {/* graphic representation */}
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
                price={totalPrice}
                purchaseable={purchaseable}
                ordered={purchaseHandler}
            />
        </Auxiliar>
    );
}

export default BurgerBuilder;