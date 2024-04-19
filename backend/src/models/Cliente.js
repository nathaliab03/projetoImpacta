class Cliente  {
    #nome;
    #cpf;
    telefoneDeContato;

    constructor(nome, cpf, telefoneDeContato){
        this.nome = nome;
        this.cpf = cpf;
        this.telefoneDeContato = telefoneDeContato;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome) {
        if (nome.length === 0 || nome.length <= 2) {
          throw new Error('O nome não pode estar vazio ou ter menos de 3 caracteres.')
        } else {
          this.#nome = nome;
          return true;
        }
      }

    get cpf(){
        return this.#cpf
    }

    set cpf(cpf){
        if(cpf.length === 0)
            throw new Error('O CPF não pode estar vazio')
        else if(cpf.length != 11)
            throw new Error('Digite um CPF válido')
        else this.#cpf = cpf; 
    }

    get telefoneDeContato(){
        return this.telefoneDeContato;
    }

    set telefoneDeContato(telefoneDeContato){
        return this.telefoneDeContato = telefoneDeContato;
    }

    mostrarDetalhesCliente(){
        return `
                Nome: ${this.#nome} \n
                CPF: ${this.#cpf} \n
                Endereço: ${this.telefoneDeContato}
            ` 
    }  
}

module.exports = Cliente;

