export class PedidosAdocao{
    id?;
    idAnimal;
    idUsuarioPedido;

    constructor(){}

    toObject(){
        return {
            id: this.id,
            idAnimal: this.idAnimal,
            idUsuarioPedido: this.idUsuarioPedido
        };
    }
    validar(){
        if(this.id == "" && this.idAnimal == "" && this.idUsuarioPedido == ""){
            return false;
        }
        return true;
    }
}