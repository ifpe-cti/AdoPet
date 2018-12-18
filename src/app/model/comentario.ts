export class Comentario {
    id?: string;
    idUsuario: String;
    idAnimal: String;
    texto: string;

    getTexto(){
        return { texto: this.texto};
    }
    toDocument(){
        return {
            idUsuario: this.idUsuario,
            idAnimal: this.idAnimal,
            texto: this.texto
        };
    }
    validar(){
        if(this.texto == ""){
            return false
        }
        return true
    }
}
