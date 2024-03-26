import { Pizza } from "./Pizza.js";
export class PizzaQuatroQueijos extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.printInfo("quatro queijos");
    }
}
