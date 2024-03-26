import { IngredientType } from "./IngredientType.js";
import { Pizza } from "./Pizza.js";
import { PizzaCalabresa } from "./PizzaCalabresa.js";
import { PizzaPortuguesa } from "./PizzaPortuguesa.js";
import { PizzaQuatroQueijos } from "./PizzaQuatroQueijos.js";
import { PizzaVegetariana } from "./PizzaVegetariana.js";
import { PizzaType } from "./types.js";

export class PizzaStoreFranchise {
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

    orderPizza(type: PizzaType): Pizza {
        let pizza: Pizza
        switch (type) {
            case PizzaType.CALABRESA:
                pizza = new PizzaCalabresa([
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('calabresa', 100),
                    this.createIngrediente('azeitona', 50),
                    this.createIngrediente('molho', 100)
                ]);
                break;
            case PizzaType.PORTUGUESA:
                pizza = new PizzaPortuguesa([
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('tomate', 100),
                    this.createIngrediente('ovo cozido', 50),
                    this.createIngrediente('cebola', 50),
                    this.createIngrediente('molho', 100),
                ]);
                break;
            case PizzaType.QUATROQUEIJOS:
                pizza = new PizzaQuatroQueijos([
                    this.createIngrediente('queijo muçarela', 50),
                    this.createIngrediente('queijo gorgonzola', 50),
                    this.createIngrediente('queijo provolone', 50),
                    this.createIngrediente('queijo parmesão', 50),
                    this.createIngrediente('molho', 100 ),
                ]);
                break;
            case PizzaType.VEGETARIANA:
                pizza = new PizzaVegetariana([
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('berinjela', 200),
                    this.createIngrediente('azeitonas', 50),
                    this.createIngrediente('molho', 100),
                ]);
        }
        pizza.prepare()
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
