const fs = require('fs');

function gerarId() {
  let proximoId = 1;
  return function() {
    return proximoId++;
  };
}

const gerarIdCliente = gerarId();
const gerarIdProduto = gerarId();
const gerarIdPedido = gerarId();

class BancoDeDados {
  constructor() {
    this.clientes = [];
    this.produtos = [];
    this.pedidos = [];
  }

  // ----- Banco de dados Clientes -----
  cadastrarCliente(cliente) {
    cliente.id = gerarIdCliente();
    this.clientes.push(cliente);
  }

  listarClientes() {
    return this.clientes.map((cliente) => ({
        id: cliente.id,
        nome: cliente.nome,
        cpf: cliente.cpf,
        contato: cliente.telefoneDeContato,
    }));
  };

  exportarDadosCliente(){
    const dados = this.listarClientes();
    const dadosJSON = JSON.stringify(dados);
    const nomeDoArquivo = `dadosClientes.json`;
    

    fs.writeFile(nomeDoArquivo, dadosJSON, (err) => {
      if(err) { console.error('ocoreu um erro na gravação', err);
      return;
      }
          console.log("Arquivo json criado");
      })
  }


  // ----- Banco de dados Produtos -----
  cadastrarProduto(produto){
    produto.id = gerarIdProduto();
    this.produtos.push(produto);
  };

  listarProduto(){
    return this.produtos.map((produto) => ({
      id: produto.id,
      titulo: produto.titulo,
      quantidadeEmEstoque: produto.quantidadeEmEstoque

    }));
  };

  exportarDadosProduto(){
    const dados = this.listarProduto();
    const dadosJSON = JSON.stringify(dados);
    const nomeDoArquivo = `dadosProduto.json`;
    

    fs.writeFile(nomeDoArquivo, dadosJSON, (err) => {
      if(err) { console.error('ocoreu um erro na gravação', err);
      return;
      }
          console.log("Arquivo json criado");
      })
  }


  // ----- Banco de dados Pedidos -----
  cadastrarPedido(pedido){
    pedido.id = gerarIdPedido();
    this.pedidos.push(pedido);
  }

  listarPedido(){
    return this.pedidos.map((pedido) => ({
      id: pedido.id,
      Cliente: pedido.nomeCliente,
      Produto: pedido.produtoSolicitado,
      Quantidade: pedido.quantidadeSolicitada,
      Pagamento: pedido.formaDePagamento,
      Status: pedido.statusDoPedido,

    }));
  };

  exportarDadosPedido(){
    const dados = this.listarPedido();
    const dadosJSON = JSON.stringify(dados);
    const nomeDoArquivo = `dadosPedido.json`;
    

    fs.writeFile(nomeDoArquivo, dadosJSON, (err) => {
      if(err) { console.error('ocoreu um erro na gravação', err);
      return;
      }
          console.log("Arquivo json criado");
      })
  }
  
};

module.exports = BancoDeDados;