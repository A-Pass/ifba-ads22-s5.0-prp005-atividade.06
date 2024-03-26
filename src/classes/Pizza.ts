import { IngredientType } from "./IngredientType.js";

export abstract class Pizza {
    protected ingredients: IngredientType[];
  
    constructor(ingredients: IngredientType[]) {
      this.ingredients = ingredients;
    }
  
    public prepare(): void {
      console.log('Preparando a pizza')
    }

    public bake(): void {
      console.log('Assando a pizza')
    }

    public cut(): void {
      console.log('Cortando a pizza')
    }

    public box(): void {
      console.log('Empacotando a pizza')
    }

    protected printInfo(nome: string) {
      console.log(`Criando pizza de ${nome} com os seguintes ingredientes: [`);
      const igts: string[] = []
      for(const ingrediente of this.ingredients) {
        igts.push(`  { name: '${ingrediente.name}', quantity: ${ingrediente.quantity} }`)
      }
      console.log(igts.join(', \n'), '\n]');
    }
}

