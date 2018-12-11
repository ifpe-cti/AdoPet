import { PedidosAdocao } from './PedidosAdocao';

describe("Testes da classe PedidosAdocao", () =>{
    it("Deve retornar falso, pois é um pedido inválido", () =>{
        let pedidosAdocao: PedidosAdocao = new PedidosAdocao()

        expect(pedidosAdocao.validar()).toBeFalsy()
    })

    it("Deve retornar verdadeiro, pois os dados do pedido de adoção estão corretos", () =>{
        let pedidosAdocao: PedidosAdocao = new PedidosAdocao()

        pedidosAdocao.id = "GYYmVTJwpRF3UQm2QUkg"
        pedidosAdocao.idAnimal = "MLoQjqevvSBHx7JzdNvO"
        pedidosAdocao.idUsuario = "RpXEVasXqSTbyzQpDSOfHR4Y7Sg1"
        
        expect(pedidosAdocao.validar()).toBeTruthy()
    })
})