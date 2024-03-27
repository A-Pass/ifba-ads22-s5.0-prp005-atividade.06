import { Pizza } from "./Pizza.js";
import { PizzaCalabresa } from "./PizzaCalabresa.js";
import { PizzaPortuguesa } from "./PizzaPortuguesa.js";
import { PizzaQuatroQueijos } from "./PizzaQuatroQueijos.js";
import { PizzaStoreFranchise } from "./PizzaStoreFranchise.js";
import { PizzaVegetariana } from "./PizzaVegetariana.js";
import { PizzaType } from "./types.js";

export class PizzaStorBrazil extends PizzaStoreFranchise {
    protected createPizza(type: PizzaType): Pizza {
        switch (type) {
            case PizzaType.CALABRESA:
                return new PizzaCalabresa( [
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('calabresa', 100),
                    this.createIngrediente('azeitona', 50),
                    this.createIngrediente('molho', 100)
                ]);
            case PizzaType.PORTUGUESA:
                return new PizzaPortuguesa([
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('tomate', 100),
                    this.createIngrediente('ovo cozido', 50),
                    this.createIngrediente('cebola', 50),
                    this.createIngrediente('molho', 100),
                ]);
            case PizzaType.QUATROQUEIJOS:
                return new PizzaQuatroQueijos([
                    this.createIngrediente('queijo muçarela', 50),
                    this.createIngrediente('queijo gorgonzola', 50),
                    this.createIngrediente('queijo provolone', 50),
                    this.createIngrediente('queijo parmesão', 50),
                    this.createIngrediente('molho', 100 ),
                ]); 
            case PizzaType.VEGETARIANA:
                return new PizzaVegetariana([
                    this.createIngrediente('queijo muçarela', 100),
                    this.createIngrediente('berinjela', 200),
                    this.createIngrediente('azeitonas', 50),
                    this.createIngrediente('molho', 100),
                ]); 
        }
    }
}
