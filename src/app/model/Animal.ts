export class Animal {
    id?: string;
    nome: String;
    tipo: String;
    sexo: String;
    cor: String;
    idade: String;
    porte: String;
    descricao: String;
    idUsuario?: String;

    constructor(){ }

  /* validar(){
        if(this.nome == "" || this.tipo == "" || this.sexo == "" || this.cor == ""|| this.idade == "" ||
         this.porte == "" || this.descricao == ""){
            return false;
        }
        return true;
    }
    toDocument(){
        return {
            nome: this.nome,
            tipo: this.tipo,
            sexo: this.sexo,
            cor: this.cor,
            idade: this.idade,
            porte: this.porte,
            descricao: this.descricao,
            idUsuario: this.idUsuario
        }
    } */
}