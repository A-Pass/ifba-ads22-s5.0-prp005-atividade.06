import { Pizza } from "./Pizza.js";
import { IngredientType } from "./IngredientType.js";

export class PizzaQuatroQueijos extends Pizza {
    constructor(ingredients: IngredientType[]) {
        super(ingredients);
        this.printInfo("quatro queijos");
    }
}
