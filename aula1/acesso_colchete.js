const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "112223345",
    email: "andre@dominio.com"
};

console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
    );

const chave = ["nome", "idade", "cpf", "email", "altura"];

chave.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});