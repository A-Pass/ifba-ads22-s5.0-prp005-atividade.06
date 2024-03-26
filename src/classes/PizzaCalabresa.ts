import { Pizza } from "./Pizza.js";
import { IngredientType } from "./IngredientType.js";

export class PizzaCalabresa extends Pizza {
    constructor(ingredients: IngredientType[]) {
        super(ingredients);
        this.printInfo("calabresa");
    }
}
