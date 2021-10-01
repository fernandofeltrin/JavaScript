const funcionario1 = {
    nome: 'Fernando',
    idade: 34,
    funcao: 'Eng. da Computação',
    turno: 'Diurno',
    dados: {
        salario: 4932.55,
        admissao: '06/2019',
        auxilio: 'não',
        vale_transporte: 'não'
    }
}

const {nome: nome1, funcao: funcao1} = funcionario1
// Operador Destructuring
// Extraindo dados dos campos nome e funcao da constante funcionario1
// Os dados extraidos de nome serão atribuidos a nome1, assim como de funcao para funcao1

console.log(nome1)
console.log(funcao1)

const {dados:{salario: salario1}, dados:{auxilio: auxilio1}} = funcionario1
// Extraindo dados de um objeto dentro de outro objeto, simplesmente usando a notação de {} de acordo com a camada

console.log(salario1)
console.log(auxilio1)
