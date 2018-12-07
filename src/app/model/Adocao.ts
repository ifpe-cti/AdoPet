export class Adocao {    
    id?: string;
    idPedido: string;
    //data: string;

    constructor(){}

    toDocument(){
        return {
            idPedido: this.idPedido,
            //data: this.data
        };
    }
}