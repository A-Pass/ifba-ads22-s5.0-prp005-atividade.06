import { IngredientType } from "./IngredientType.js";
export class PizzaStoreFranchise {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    createIngrediente(name, quantity) {
        return new IngredientType(name, quantity);
    }
    orderPizza(type) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
