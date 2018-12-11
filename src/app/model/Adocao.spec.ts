import { Adocao } from "./Adocao";

describe("Testes da classe Adocao", () =>{
    it("Deve retornar falso, pois é uma adoção inválida", () =>{
        let adocao: Adocao = new Adocao()

        expect(adocao.validar()).toBeFalsy()
    })

    it("Deve retornar verdadeiro, pois os dados da classe são válidos", () =>{
        let adocao: Adocao = new Adocao()
        
        adocao.idPedido = "GYYmVTJwpRF3UQm2QUkg"

        expect(adocao.validar()).toBeTruthy()
    })
})