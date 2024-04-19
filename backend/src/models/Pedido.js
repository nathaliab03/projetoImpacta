class Pedido {
    nomeCliente;
    produtoSolicitado;
    statusDoPedido;
    formaDePagamento
    quantidadeSolicitada

    constructor(nomeCliente, produtoSolicitado, quantidadeSolicitada, formaDePegamento){
        this.nomeCliente = nomeCliente;
        this.produtoSolicitado = produtoSolicitado;
        this.quantidadeSolicitada = quantidadeSolicitada;
        this.formaDePagamento = formaDePegamento;
        this.statusDoPedido = 'Aguardando Pagamento'
    }

    mostrarDetalhesDoPedido(){
        return `
            Nome do Cliente: ${this.nomeCliente} \n
            Produto Solicitado: ${this.produtoSolicitado} \n
            Quantidade Solicitada: ${this.quantidadeSolicitada} \n
            Forma de Pagamento: ${this.formaDePagamento} \n
            Status do Pedido: ${this.statusDoPedido} \n
        `
    }
}

module.exports = Pedido;