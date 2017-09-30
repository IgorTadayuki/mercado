// http://usejsdoc.org/

export class Produto {

    /**
     * Construtor da classe
     * @param nome
     * @param preco
     * @param estoque
     */
    constructor(nome, preco, estoque) {
        var __nome = nome;
        var __preco = preco;
        var __estoque = estoque;

        this.getNome = __nome;
        this.setNome = function(novoNome) { __nome = novoNome };
        this.getPreco = function() { __preco };
        this.setPreco = function(novoPreco) { __preco = novoPreco };
        this.getEstoque = function() { __estoque };
        this.setEstoque = function(novoEstoque) { __estoque = novoEstoque };
    }

    /**
     * Função que subtrai do estoque a quantidade comprada
     * @throws Exceção de estoque insuficiente
     * @param qtde
     */
    removeEstoque(qtde) {
        if (qtde > this.estoque) {
            throw Error("Estoque insuficiente!");
        }
        this.estoque = this.estoque - qtde;
    }
}