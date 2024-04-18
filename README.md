# Tema: Sistema para vendas de uma livraria online
Sistema efetua o passo a passo de um pedido de uma venda para um pequeno comércio que possua uma loja física, mas que deseja implementar pedidos online. <br>

## Lógica de Negócio

- Sistema de cadastro de clientes, funcionários e produtos;<br>
Para utilizar o programa, clientes, funcionários e produtos é necessário efetuar um cadastro
- Efetuar Pedidos;
- Gerenciamento de estoque;<br>
Após efetuado um pedido o estoque deve ser atualizado
- Consulta e atualização de pedidos efetuados;<br>
Clientes e Funcionários devem ser capazes de consultar e atualizar pedidos.
- Pagamento;
- Emissão de nota fiscal<br>
Após pedido efetuado com sucesso é emitido uma nota fiscal

## Caso de Uso - Efetuar Pedido
<b>Ator Primário:</b> Cliente; <br>
<b>Pré-requisito:</b> Logar no sistema

### Fluxo Normal:
1. 	O cliente efetua o pedido no sistema;
2.	O sistema verifica se a quantidade solicitada está disponível em estoque;
3.	O sistema verifica se o cliente está cadastrado no sistema;
4.	O cliente é direcionado a “Tela de Pagamento”
5.	Cliente escolhe a forma de pagamento: <br>
  5.1.	Vender CD à vista;<br>
  5.2.	Vender CD à prazo;<br>
6.	O sistema aguarda a baixa do pagamento
7.	O sitema emite nota fiscal
8.	O estoque é atualizado
9.	Pedido sai para entrega
10.	Sistema é encerrado

### Fluxo Alternativo: o cliente não possui cadastro
1.1 Cliente efetua o cadastro<br>
1.2 Retorna ao passo 1

### Fluxo Alternativo: o produto está em falta no estoque
2.1 Sistema exibe mensagem de erro<br>
2.2 Pedido é cancelado
### Fluxo Alternativo: venda à vista
5.1.1 Aplica desconto de 10%<br>
5.1.2 Retorna ao passo 5.1
### Fluxo Alternativo: pedido negado
6.1 Sistema exibe mensagem de erro<br>
6.2 Pedido é cancelado
### Fluxo Alternativo: falha na entrega
6.1 Sistema exibe mensagem de erro<br>
6.2 Pedido é cancelado

### Requisitos
[RF001] - Manter dados dos Clientes; <br>
[RF002] - Manter dados dos Funcionários; <br>
[RF003] - Manter dados dos Produtos; <br>
[RF004] - Manter dados do Estoque; <br> 
[RF005] - Manter dados dos Pagamentos; <br>
[RF006] - Manter dados dos Pedidos;
