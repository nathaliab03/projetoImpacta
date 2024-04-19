const { cadastrarCliente, cadastrarProduto, cadastrarPedido, exportarDados, listarClientesCadastrados } = require('./services/cadastrar');

console.log(`-----CADASTRO DE CLIENTES ------`);
var novoCliente = cadastrarCliente('Alexia', '55530339333', '11984747363');
var novoCliente2 = cadastrarCliente('Matheus', '44067914857', '543345433');

console.log(`\n-----CADASTRO DE CLIENTES COM ERRO------`);
var novoCliente3 = cadastrarCliente('', '55530339333', '11984747363'); // Nome não pode estar vazio
var novoCliente4 = cadastrarCliente('Beatriz', '5454', '11984747363'); // CPF precisa de 11 digitos, entrada invalida


console.log(`\n-----CADASTRO DE PRODUTOS------`);
var novoProduto = cadastrarProduto('Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 2005, 'Fantasia', 100);
var novoProduto2 = cadastrarProduto('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1999, 'Fantasia', 100);

console.log(`\n-----CADASTRO DE PRODUTOS COM ERRO------`);
var novoProduto3 = cadastrarProduto('', 'Rick Riordan', 2005, 'Fantasia', 100); // Titulo não pode estar vazio


console.log(`\n-----CADASTRO DE PEDIDOS------`);
var novoPedido = cadastrarPedido(novoCliente.nome, novoProduto2.titulo, 1, 'PIX');
var novoPedido = cadastrarPedido(novoCliente2.nome, 'Percy Jackson e o Ladrão de Raios', 1, 'PIX');

console.log(`\n-----CADASTRO DE PEDIDOS COM ERRO------`);
var novoPedido = cadastrarPedido('Teste', 'Harry Potter e a Pedra Filosofal', 1, 'PIX'); // Cliente não existe
var novoPedido = cadastrarPedido('Alexia', 'teste', 1, 'PIX'); // Titulo não existe

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


// Gera JSON dos serviços
exportarDados();