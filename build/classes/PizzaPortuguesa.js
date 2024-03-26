import { Pizza } from "./Pizza.js";
export class PizzaPortuguesa extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.printInfo("portuguesa");
    }
}
