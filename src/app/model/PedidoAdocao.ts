export class PedidoAdocao{
    idAnimal;
    idUsuarioPedido;

    constructor(){}

    toObject(){
        return {
            idAnimal: this.idAnimal,
            idUsuarioPedido: this.idUsuarioPedido
        };
    }
    validar(){
        if(this.idAnimal == "" && this.idUsuarioPedido == ""){
            return false;
        }
        return true;
    }
}