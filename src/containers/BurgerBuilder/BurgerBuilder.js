import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

import Aux from "../../components/hoc/Aux";

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    });

    return (
        <Aux>
            <Burger ingredients={ingredients} />  {/* graphic representation */}
            <div>Build Controls</div>
        </Aux>
    );
}

export default BurgerBuilder;