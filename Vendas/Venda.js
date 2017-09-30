import {Item} from "./Item";

export class Venda {

    /**
     * Construtor da classe
     * @param nome
     * @param cpf
     */
    constructor(nome, cpf) {
        var __cpf = cpf;
        var __nome = nome;
        var itensDeVenda = [];
        var total = 0.0;

        this.getCpf = __cpf;
        this.setCpf = function(novoCpf) { __cpf = novoCpf };
        this.getNome = __nome;
        this.setNome = function(novoNome) { __nome = novoNome };
    }

    /**
     * Função que adiciona um produto no "carrinho", e inicialmente tenta remover
     * uma quantidade do estoque, adiciona o produto e soma o preço no total
     * @param prod
     * @param qtde
     */
    adicionarProduto(prod, qtde) {
        prod.removeEstoque(qtde);
        this.constructor.itensDeVenda = this.constructor.itensDeVenda.push(new Item(prod, qtde));
        this.total = this.total + (prod.getPreco() * qtde);
    }

    /**
     *
     * @returns o valor total da venda
     */
    getTotal()
    {
        return this.total;
    }

}