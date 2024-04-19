function cadastrarProduto(titulo, autor, anoDePublicacao, genero, quantdadeEmEstoque) {
    try{
        let produto = new Produto(titulo, autor, anoDePublicacao, genero, quantdadeEmEstoque);

        dataBase.cadastrarProduto(produto);
        console.log("Produto cadastrado com sucesso!");
    } catch(error){
        console.error(`Erro ao cadastrar produto: ${error.message}`);
    }
}