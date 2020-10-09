import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Auxiliar from "../../components/hoc/Auxiliar";

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

    const [totalPrice, setTotalPrice] = useState(2);
    const [purchaseable, setPurchaseable] = useState(false);

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
            <Burger ingredients={ingredients} />  {/* graphic representation */}
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                disabled={disabledInfo}
                price={totalPrice}
                purchaseable={purchaseable}
            />
        </Auxiliar>
    );
}

export default BurgerBuilder;