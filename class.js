class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}

let pessoa1 = new Pessoa('Fernando', 'Feltrin', 34)

console.log(pessoa1.nome)
