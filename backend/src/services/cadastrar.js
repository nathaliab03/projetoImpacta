const Cliente = require('../models/Cliente.js');
const Produto = require('../models/Produto.js');
const Pedido = require('../models/Pedido.js');
const Database = require('../data/bancoDeDados.js');

const database = new Database()

function cadastrarCliente(nome, cpf, telefone) {
    try {
      let cliente = new Cliente(nome, cpf, telefone);
      database.cadastrarCliente(cliente);
      console.log("Cliente cadastrado com sucesso!");
      return cliente;
    } catch (error) {
      console.error(`Erro ao cadastrar cliente: ${error.message}`);
    }
  }
  
  function cadastrarProduto(titulo, autor, anoDePublicacao, genero, quantidadeEmEstoque) {
    try {
      let produto = new Produto(titulo, autor, anoDePublicacao, genero, quantidadeEmEstoque);
      database.cadastrarProduto(produto);
      console.log("Produto cadastrado com sucesso!");
      return produto
    } catch (error) {
      console.error(`Erro ao cadastrar produto: ${error.message}`);
    }
  }
  
  function cadastrarPedido(idCliente, produtoSolicitado, quantidadeSolicitada, formaDePagamento) {
    try {
      const validaInformacoes = validarInformacoes(idCliente);
      if (validaInformacoes) {
        const validaProduto = validarProduto(produtoSolicitado)
            if(validaProduto){
            let pedido = new Pedido(idCliente, produtoSolicitado, quantidadeSolicitada, formaDePagamento);
            database.cadastrarPedido(pedido);
            console.log("Pedido cadastrado com sucesso!");
            return pedido;
    }
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  

  function validarInformacoes(nomeServico) {
    try {
      const clientesCadastrados = database.listarClientes();
      const localizarClientes = clientesCadastrados.filter(cliente => cliente.nome === nomeServico);
      const nomeProcurado = localizarClientes.length > 0 ? localizarClientes[0].nome : null
  
      if (nomeProcurado != nomeServico) {
        throw new Error('Cliente não Localizado');
      } else {
        return true
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }

  function validarProduto(nomeServico) {
    try {
      const clientesCadastrados = database.listarProduto();
      const localizarClientes = clientesCadastrados.filter(cliente => cliente.titulo === nomeServico);
      const nomeProcurado = localizarClientes.length > 0 ? localizarClientes[0].titulo : null
  
      if (nomeProcurado != nomeServico) {
        throw new Error('Titulo não Localizado');
      } else {
        return true
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }

  function listarClientesCadastrados(servico){
    if(servico == 'cliente'){
        console.log('Clientes Cadastrados: ')
        return database.listarClientes();
    }
    else if(servico == 'produto'){
        console.log('Produtos Cadastrados: ')
        return database.listarProduto();
    }
    else if(servico == 'pedido'){
        console.log('Pedidos Cadastrados: ')
        return database.listarPedido()
    }
  }

  function exportarDados(){
    database.exportarDadosCliente()
    database.exportarDadosProduto()
    database.exportarDadosPedido()
  }

  module.exports = {listarClientesCadastrados,
    cadastrarCliente,
    cadastrarProduto,
    cadastrarPedido,
    exportarDados
  };
  
