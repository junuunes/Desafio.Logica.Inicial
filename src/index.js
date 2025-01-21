console.log("Primeiro desafio de código de Lógica de Programação")
console.log("Classificador de nível de Herói")

let nomeHeroi = "Juju Hacker das Galáxias"
let nivelXP = 2
const mensagem = "O Herói de nome " + nomeHeroi + " está no nível de "

for (let contador = 1; contador<=8; contador++){
    console.log("RODADA: " + contador)
    console.log("XP atual: " +nivelXP)

if (nivelXP<= 1000){
    console.log(mensagem + "FERRO")
}
else if ((nivelXP>=1001) && (nivelXP<=2000)){
    console.log(mensagem + "BRONZE")
}
else if ((nivelXP>=2001) && (nivelXP<=5000)){
    console.log(mensagem + "PRATA")
}
else if ((nivelXP>=6001) && (nivelXP<=7000)){
    console.log(mensagem + "OURO")
}
else if ((nivelXP>=7001) && (nivelXP<=8000)){
    console.log(mensagem + "PLATINA")
}
else if ((nivelXP>=8001) && (nivelXP<=9000)){
    console.log(mensagem + "ASCENDENTE")
}
else if ((nivelXP>=9001) && (nivelXP<=10000)){
    console.log(mensagem + "IMORTAL")
}
else {
    console.log(mensagem + "RADIANTE")
}
nivelXP+=1500
}