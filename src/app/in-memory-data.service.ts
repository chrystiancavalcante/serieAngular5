import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cadastro = [

        {id: 1, nome: "João Roberto da Silva", bairro: "Barra", cep: "22641-191", cidade: "Rio de janeiro", uf: "RJ" },
        {id: 2, nome: "Pedro", bairro: "Santos", cep: "22641-190", cidade: "São Paulo", uf: "SP" }
    
    ];
    return {cadastro};
  }
}