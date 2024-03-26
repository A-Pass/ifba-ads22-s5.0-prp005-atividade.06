import { Pizza } from "./Pizza.js";
import { IngredientType } from "./IngredientType.js";

export class PizzaPortuguesa extends Pizza {
    constructor(ingredients: IngredientType[]) {
        super(ingredients);
        this.printInfo("portuguesa");
    }
}
