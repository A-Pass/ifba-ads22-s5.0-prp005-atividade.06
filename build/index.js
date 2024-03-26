import { promptSelect } from './lib/prompts.js';
import { PizzaStoreFranchise } from './classes/PizzaStoreFranchise.js';
import { PizzaType } from './classes/types.js';
let eunaPizza = new PizzaStoreFranchise('Eunápolis/BRASIL');
let option = -1;
while (option !== 4) {
    option = await promptSelect({
        message: 'Escolha uma pizza',
        choices: [
            'CALABRESA',
            'PORTUGUESA',
            'QUATRO QUEIJOS',
            'VEGETARIANA',
            'Sair',
        ],
    });
    switch (option) {
        case 0:
            console.log('=====================');
            eunaPizza.orderPizza(PizzaType.CALABRESA);
            console.log('=====================');
            break;
        case 1:
            console.log('=====================');
            eunaPizza.orderPizza(PizzaType.PORTUGUESA);
            console.log('=====================');
            break;
        case 2:
            console.log('=====================');
            eunaPizza.orderPizza(PizzaType.QUATROQUEIJOS);
            console.log('=====================');
            break;
        case 3:
            console.log('=====================');
            eunaPizza.orderPizza(PizzaType.VEGETARIANA);
            console.log('=====================');
            break;
    }
}
