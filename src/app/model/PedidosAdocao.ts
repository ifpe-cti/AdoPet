export class PedidosAdocao {
    id?: string;
    idAnimal: String;
    idUsuario: String;
    $nomeUsuario: String;

    constructor(){}

    toObject(){
        return {
            id: this.id,
            idAnimal: this.idAnimal,
            idUsuarioPedido: this.idUsuario,
            nomeUsuario: this.$nomeUsuario
        };
    }

    validar(){
        if(this.id == "" && this.idAnimal == "" && this.idUsuario == ""){
            return false;
        }
        return true;
    }
}