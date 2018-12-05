import { Usuario } from './Usuario';
import { Animal } from './Animal';
export class PedidosAdocao {
    id?: string;
    idAnimal: String;
    idUsuario: String;
    usuario:Usuario;
    animal:Animal;
    status:String;

    constructor(){}

    toDocument(){
        return {
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