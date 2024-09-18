let nomeDoHeroi = "Homen de ferro";
let quantidadeDeXp = 1000;

if (quantidadeDeXp<=1000) {
console.log("O Herói de "+nomeDoHeroi+" está no nivel de Ferro");
} else if (quantidadeDeXp>=1001 && quantidadeDeXp<=2000) {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Bronze");
}else if (quantidadeDeXp>=1001 && quantidadeDeXp<=5000) {
    console.log("Prata");
}else if (quantidadeDeXp>=5001 && quantidadeDeXp<=7000) {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Ouro");
}else if (quantidadeDeXp>=5001 && quantidadeDeXp<=8000) {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Platina Diamante");
}else if (quantidadeDeXp>=8001 && quantidadeDeXp<=9000) {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Ascendente");
}else if (quantidadeDeXp>=9001 && quantidadeDeXp<=10000) {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Imortal");
} else {
    console.log("O Herói de "+nomeDoHeroi+" está no nivel de Radiante")
}

