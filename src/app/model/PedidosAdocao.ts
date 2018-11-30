export class PedidosAdocao{
    id?: String;
    idAnimal: String;
    idUsuario: String;

    constructor(){}

    toObject(){
        return {
            id: this.id,
            idAnimal: this.idAnimal,
            idUsuarioPedido: this.idUsuario
        };
    }
    validar(){
        if(this.id == "" && this.idAnimal == "" && this.idUsuario == ""){
            return false;
        }
        return true;
    }
}