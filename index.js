const nomeDoHeroi = "Gandalf";
const xpDoHeroi = 2000;

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
for(const item of niveis){
    if(xpDoHeroi <= item.limite){
        nivel = item.nome;
        break;
    }
}

console.log(`O Nome do Heroi e ${nomeDoHeroi} e está no nivel ${nivel}.`)