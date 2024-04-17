# Tema: Sistema para vendas de uma livraria online
Sistema efetua o passo a passo de um pedido de uma venda para uma livraria física, mas que deseja implementar pedidos online.
### Fluxo Normal:
1. 	O cliente efetua o pedido no sistema;
2.	O sistema verifica se a quantidade solicitada está disponível em estoque;
3.	O sistema verifica se o cliente está cadastrado no sistema;
4.	O cliente é direcionado a “Tela de Pagamento”
5.	Cliente escolhe a forma de pagamento: <br>
  5.1.	Vender CD à vista;<br>
  5.2.	Vender CD à prazo;<br>
6.	O sistema aguarda a baixa do pagamento
7.	O estoque é atualizado
8.	Pedido sai para entrega
9.	O sitema emite nota fiscal
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
