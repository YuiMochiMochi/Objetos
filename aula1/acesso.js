const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "112223345",
    email: "andre@dominio.com"
};

console.log(
    `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
    );

console.log(`Os 3 primeros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);