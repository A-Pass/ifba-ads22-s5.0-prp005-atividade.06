import { Pizza } from "./Pizza.js";
export class PizzaVegetariana extends Pizza {
    constructor(ingredients) {
        super(ingredients);
        this.printInfo("vegetariana");
    }
}
