console.log("Segundo desafio de código de Lógica de Programação")
console.log ("Calculadora de Partidas Rankeadas")

let saldoRankeadas = calculadoraPartidasRankeadas(133,2)
let nivel
    if (saldoRankeadas<=10){
        nivel="FERRO"
    }
    else if (saldoRankeadas<=20){
        nivel="BRONZE"
    }
    else if (saldoRankeadas<=50){
        nivel="PRATA"
    }
    else if (saldoRankeadas<=80){
        nivel="OURO"
    }
    else if (saldoRankeadas<=90){
        nivel="DIAMANTE"
    }
    else if (saldoRankeadas<=100){
        nivel="LENDÁRIO"
    }
    else{
        nivel="IMORTAL"
    }

console.log(`O Herói tem saldo de ${saldoRankeadas} e está no nível ${nivel} `)

    function calculadoraPartidasRankeadas (vitorias, derrotas){
        resultado = vitorias - derrotas
        return resultado
}
