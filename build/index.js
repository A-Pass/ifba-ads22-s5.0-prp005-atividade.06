import { promptSelect } from './lib/prompts.js';
import { PizzaType } from './classes/types.js';
import { PizzaStorBrazil } from './classes/PizzaStoreBrazil.js';
import { PizzaStoreJamaica } from './classes/PizzaStoreJamaica.js';
let optionCity = -1;
let pizzaria;
while (optionCity != 2) {
    optionCity = await promptSelect({
        message: 'Escolha a pizzaria',
        choices: [
            'Brazil',
            'Jamaica',
            'Sair',
        ],
    });
    switch (optionCity) {
        case 0:
            pizzaria = new PizzaStorBrazil("Eunápolis/BRASIL");
            break;
        case 1:
            pizzaria = new PizzaStoreJamaica('Kingston,/JAMAICA');
            break;
        default:
            pizzaria = undefined;
            console.log('Opção inválida!');
    }
    if (pizzaria != undefined) {
        let optionPizza = -1;
        while (optionPizza !== 4) {
            optionPizza = await promptSelect({
                message: 'Escolha uma pizza',
                choices: [
                    'CALABRESA',
                    'PORTUGUESA',
                    'QUATRO QUEIJOS',
                    'VEGETARIANA',
                    'Sair',
                ],
            });
            switch (optionPizza) {
                case 0:
                    console.log('=====================');
                    pizzaria.orderPizza(PizzaType.CALABRESA);
                    console.log('=====================');
                    break;
                case 1:
                    console.log('=====================');
                    pizzaria.orderPizza(PizzaType.PORTUGUESA);
                    console.log('=====================');
                    break;
                case 2:
                    console.log('=====================');
                    pizzaria.orderPizza(PizzaType.QUATROQUEIJOS);
                    console.log('=====================');
                    break;
                case 3:
                    console.log('=====================');
                    pizzaria.orderPizza(PizzaType.VEGETARIANA);
                    console.log('=====================');
                    break;
            }
        }
    }
}
