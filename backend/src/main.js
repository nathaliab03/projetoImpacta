const { cadastrarCliente, cadastrarProduto, cadastrarPedido, exportarDados, listarClientesCadastrados } = require('./services/cadastrar');

console.log(`-----CADASTRO DE CLIENTES ------`);
var novoCliente = cadastrarCliente('Alexia', '55530339333', '11984747363');
var novoCliente2 = cadastrarCliente('Matheus', '44067914857', '543345433');

console.log(`\n-----CADASTRO DE PRODUTOS------`);
var novoProduto = cadastrarProduto('Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 2005, 'Fantasia', 100);
var novoProduto2 = cadastrarProduto('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1999, 'Fantasia', 100);

console.log(`\n-----CADASTRO DE PEDIDOS------`);
var novoPedido = cadastrarPedido(novoCliente.nome, novoProduto2.titulo, 1, 'PIX');
var novoPedido = cadastrarPedido(novoCliente2.nome, 'Percy Jackson e o Ladrão de Raios', 1, 'PIX');

console.log(`\n-----MOSTRAR DETALHES------`);
var detalharCliente = novoCliente; // Nome do cliente que deseja Detalhar
var detalharProduto = novoProduto; // Nome do produto que deseja Detalhar

var detalhesCliente = console.log(detalharCliente.mostrarDetalhesCliente());
var detalhesProduto = console.log(detalharProduto.mostrarDetalhesLivro());

console.log(`\n-----LISTAR------`);
const procurarCliente = 'cliente';
const procurarPedido = 'pedido';
const procurarProduto = 'produto';

console.log(listarClientesCadastrados(procurarCliente))
console.log(listarClientesCadastrados(procurarPedido))
console.log(listarClientesCadastrados(procurarProduto))

console.log(`\n-----SAIDA DE ARQUIVOS JSON------`);
// Gera JSON dos serviços
exportarDados();