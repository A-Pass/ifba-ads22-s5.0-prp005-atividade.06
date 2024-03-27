import { IngredientType } from "./IngredientType.js";
import { Pizza } from "./Pizza.js";
import { PizzaType } from "./types.js";

export abstract class PizzaStoreFranchise {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    protected createIngrediente(name: string, quantity: number): IngredientType {
        return new IngredientType(name, quantity);
    }

    protected abstract createPizza(type: PizzaType): Pizza

    public orderPizza(type: PizzaType): Pizza {
        const pizza: Pizza = this.createPizza(type);
        pizza.prepare()
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
