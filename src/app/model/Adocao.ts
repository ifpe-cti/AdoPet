export class Adocao {    
    id?: string;
    idPedido: String;
    data: string;

    constructor(){}

    toDocument(){
        return {
            idPedido: this.idPedido,
            //data: this.data
        };
    }
}