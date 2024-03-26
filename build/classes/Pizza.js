export class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }
    prepare() {
        console.log('Preparando a pizza');
    }
    bake() {
        console.log('Assando a pizza');
    }
    cut() {
        console.log('Cortando a pizza');
    }
    box() {
        console.log('Empacotando a pizza');
    }
    printInfo(nome) {
        console.log(`Criando pizza de ${nome} com os seguintes ingredientes: [`);
        const igts = [];
        for (const ingrediente of this.ingredients) {
            igts.push(`  { name: '${ingrediente.name}', quantity: ${ingrediente.quantity} }`);
        }
        console.log(igts.join(', \n'), '\n]');
    }
}
