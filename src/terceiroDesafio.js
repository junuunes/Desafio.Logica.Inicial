console.log("Escrevendo as classes de um jogo:");

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        if(this.tipo === "Mago"){
            ataque = "Magia"
        }
        else if(this.tipo === "Guerreira"){
            ataque = "Espada"
        }
        else if(this.tipo === "Monge"){
            ataque = "Artes Marciais"
        }
        else if(this.tipo === "Ninja"){
            ataque = "Shuriken"
        }
        else {
            ataque = "Realizou ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);

        }
        
    }

    let heroi1 = new heroi ("Gandalf", 2000, "Mago");
        heroi1.atacar();

    let heoroi2 = new heroi ("Joana d'Arc", 19, "Guerreira");
        heoroi2.atacar();

    let heroi3 = new heroi ("Shakyamuni", 2588, "Monge");
        heroi3.atacar();

    let heroi4 = new heroi ("Yasuke", 24, "Ninja"); 
        heroi4.atacar(); 