class Produto{
    #titulo;
    #autor;
    #quantidadeEmEstoque;
    #genero;
    #anoDePublicacao;

    constructor(titulo, autor, anoDePublicacao, genero, quantidadeEmEstoque){
        this.titulo = titulo;
        this.anoDePublicacao = anoDePublicacao;
        this.autor = autor;
        this.genero = genero;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get titulo(){
        return this.#titulo;
    }

    set titulo(titulo) {
        if (titulo.length === 0 || titulo.length <= 2) {
          throw new Error('O titulo não pode estar vazio ou ter menos de 3 caracteres.');
        } else {
          this.#titulo = titulo;
          return true;
        }
    }

    get autor(){
        return this.#autor;
    }

    set autor(autor){
        if (autor.length === 0) {
            throw new Error('O nome do autor não pode estar vazio!');
          } else {
            this.#autor = autor;
            return true;
        }
    }

    get anoDePublicacao(){
        return this.#anoDePublicacao;
    }

    set anoDePublicacao(anoDePublicacao){
        if(anoDePublicacao === null)
            throw new Error('O ano de publicação não pode estar vazio');
        else this.#anoDePublicacao = anoDePublicacao; 
    }

    get genero(){
        return this.#genero;
    }

    set genero(genero){
        return this.#genero = genero;
    }

    get quantidadeEmEstoque(){
        return this.#quantidadeEmEstoque;
    }

    set quantidadeEmEstoque(quantidadeEmEstoque){
        return this.#quantidadeEmEstoque = parseInt(quantidadeEmEstoque);
    }

    mostrarDetalhesLivro(){
        return `
                Titulo: ${this.#titulo} \n
                Autor: ${this.autor} \n
                Ano de Publicação: ${this.#anoDePublicacao} \n
                Gênero: ${this.#genero} \n
                Quantidade Em Estoque: ${this.#quantidadeEmEstoque} \n
                
            ` 
    }

}

module.exports = Produto;