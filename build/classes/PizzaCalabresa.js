import { Pizza } from "./Pizza.js";
export class PizzaCalabresa extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.printInfo("calabresa");
    }
}
