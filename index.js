//DESAFIO__________________________________________________________________________
const nomeDoHeroi = "Gandalf";
const xpDoHeroi = 7000;

const niveis = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" }
];
let nivel = "Radiante";
for (const item of niveis) {
    if (xpDoHeroi <= item.limite) {
        nivel = item.nome;
        break;
    }
}

console.log(`O Nome do Heroi e ${nomeDoHeroi} e está no nivel ${nivel}.`);
//AND____________________________________________________________________________
let tempo = 'chuva';
let horario = 8

let result = !((tempo !== "chuva") && (horario > 6))

console.log(result)
//IF ELSE_____________________________________________________________________________

let possuiOvos = false;
let itensComprandos = "";

if (possuiOvos) {
    itensComprandos = 'leite';
} else {
    console.log("passou na sessão de congelados")
    itensComprandos = "lasanha congelada"
}

console.log(`item comprado: ${itensComprandos}`)
//if else______________________________________________________________________________________________

let nivelDeFome = 1

if (nivelDeFome === 1) {
    console.log("vc esta com pouca fome");
} else if (nivelDeFome === 2) {
    console.log("vc esta com muito fome");
} else {
    console.log("vc esta comendo mais que o picapau");
}
//switch_______________________________________________________________________________________________
let fruta = "banana";

switch (fruta) {
    case "laranja":
        console.log("suco de laranja");
        break;
    case "banana":
    case "morango":
        console.log(`vitamina de: ${fruta}`);
        console.log("olha ai o suco de morango com " + fruta);
        break;
    case "maça":
        console.log("suco de maça");
        break;

    default:
        console.log("suco generico");
}

//FOR___________________________________________________________________________________________________________

for (let i = 0; i < 4; i++) {
    console.log(i);
    console.log("aumentandor o contador")
}

let pontosDeVida = 0

for (let i = 0; i < 10; i++) {
    pontosDeVida += 1
    console.log("tomou poção mágica" + i);

}

console.log(pontosDeVida + " Totais")

//while____________________________________________________________________________________________________________________
let i = 3

while (i < 3) {
    console.log("olá");
    i++
}
//do while_________________________________________________________________________________________________________________________
let conta = 0
do {
    console.log('ooola')
    conta++
} while (conta < 3) {

}

//função_____________________________________________________________________________________________________________________________

function main() {
    torrar();
    injetarPao();
}

function torrar() {
    console.log("torrando pão");
}
function injetarPao() {
    console.log("preparando para injetar o pão");
    console.log('finalizado');
}

main();

//desafio_____________________________________________________________________________________________________________________

const valorSalario = 3000; // Insira o valor do seu salário aqui
const valorBeneficio = 0.15;

const valorImposto = calcularImposto(valorSalario);

const saida = valorSalario - valorImposto + valorBeneficio;

function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario >= 1100.01 && salario <= 2500.00) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

console.log(`Salário: R$ ${valorSalario.toFixed(2)}`);
console.log(`Imposto: R$ ${valorImposto.toFixed(2)}`);
console.log(`Benefício: R$ ${valorBeneficio.toFixed(2)}`);
console.log(`Saldo final: R$ ${saida.toFixed(2)}`);

//desafio________________________________________________________________________________________________________
function calcularNivel(vitorias, derrotas){
    const saldoVitoria = vitorias - derrotas;
    let nivel;

    if(saldoVitoria < 10){
        nivel = "Ferro"
    }else if(saldoVitoria >= 11 && saldoVitoria <= 20){
        nivel = "Bronze";
    }else if (saldoVitoria >= 21 && saldoVitoria <= 50){
        nivel = "Prata";
    }else if(saldoVitoria >= 51 && saldoVitoria <= 80){
        nivel = "Ouro";
    }else if(saldoVitoria >= 81 && saldoVitoria <= 90){
        nivel = "Diamante";
    }else if(saldoVitoria >= 91 && saldoVitoria <= 100){
        nivel = "lendario";
    }else{
        nivel = "Imortal";
    }
    return nivel;
}

const vitorias =  Math.max(0,parseInt(Math.random() * 100));
const derrotas =  parseInt(Math.random() * 50);
const nivelJogandor = calcularNivel(vitorias,derrotas);
console.log(`O heroi tem um saldo vitorias ${vitorias - derrotas} e está no Rank ${nivelJogandor}.`);