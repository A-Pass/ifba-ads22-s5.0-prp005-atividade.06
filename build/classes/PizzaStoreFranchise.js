import { IngredientType } from "./IngredientType.js";
import { PizzaCalabresa } from "./PizzaCalabresa.js";
import { PizzaPortuguesa } from "./PizzaPortuguesa.js";
import { PizzaQuatroQueijos } from "./PizzaQuatroQueijos.js";
import { PizzaVegetariana } from "./PizzaVegetariana.js";
import { PizzaType } from "./types.js";
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
        let pizza;
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
                    this.createIngrediente('molho', 100),
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
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
