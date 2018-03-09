import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cadastro = [

        {id: 1, nome: "João Roberto da Silva", endereco: "Av. das Américas", bairro: "Barra", cep: "22641-191", cidade: "Rio de janeiro", uf: "RJ" },
        {id: 2, nome: "Pedro", bairro: "Santos", endereco: "Rua das Aboboras", cep: "22641-190", cidade: "São Paulo", uf: "SP" }
    
    ];
    return {cadastro};
  }
}