import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./styles.css";

const Burger = (props) => {

    // We are receiving props.ingredients as an object and converting
    // it to an array by using Array() method in order to apply map function to them.
    // We do so to dynamically output a BurgerIngredient component
    const ingredients = Object.keys(props.ingredients).map(ingredientsKey => {
        return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />;
        });
    });

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;