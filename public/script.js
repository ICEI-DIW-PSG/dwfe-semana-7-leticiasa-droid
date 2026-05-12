let nome = prompt("Digite seu nome: ");
let renda = Number(prompt("Digite sua renda mensal:"));
let qtdDespesas = Number(prompt("Quantas despesas deseja informar?"));

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

while (isNaN(renda) || renda <= 0) {
    renda = Number(prompt("Digite uma renda válida:"));
}

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {

    let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

    while (isNaN(despesa) || despesa < 0) {
        despesa = Number(prompt(`Digite um valor válido para a despesa ${i}:`));
    }

    totalDespesas += despesa;
}

if (totalDespesas > renda) {
    mensagem = "Atenção: você gastou mais do que ganhou!";
}
else{
    sobra = renda - totalDespesas;

    if (sobra >= (0.3 * renda)){
    mensagem = "Ótimo: boa margem de sobra.";
    }
    else{
    mensagem = "Ok: dá para melhorar a sobra.";
    }

}

console.log("===== RESULTADO =====");
console.log("Nome:", nome);
console.log("Renda:", renda.toFixed(2));
console.log("Despesas:", totalDespesas.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log(mensagem);