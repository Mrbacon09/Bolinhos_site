function addmoney(moedas){
    let add=Number.parseInt (prompt("quanto deseja roubar?"));
    moedas+=add;
    console.log("quantidade atual: ",moedas);
    return moedas;
}


function loja(itens, moedas){
    let escolha = prompt("O que deseja?");
    while(escolha!=4){
        let espada= 1;
        let pocao= 2;
        let escudo=3;
        if(moedas >= 100 && escolha==1){
            console.log("Espada adicionada ao seu inventário\nItens: ", itens+1);
            moedas-=100;
            console.log("quantidade atual: ",moedas);
            
        }
        if(moedas >= 50 && escolha==2){
            console.log("Espada adicionada ao seu inventário\nItens: ", itens+1);
            moedas-=50;
            console.log("quantidade atual: ",moedas);
            
        }
        if(moedas >= 300 && escolha==3){
            console.log("Espada adicionada ao seu inventário\nItens: ", itens+1);
            moedas-=300;
            console.log("quantidade atual: ",moedas);
            
        }

        // if(escolha==4);{
        //     console.log("Total de itens: ",itens);
        // }
        if(escolha<1 || escolha>4){
            console.log("Escolha inválida");
        }
        if(moedas<50) {
            console.log("Lamento! Moedas insuficientes... Deseja trapacear?\n0 - NÃO  //  1 - SIM");
            let cheat= prompt();
            if(cheat==0){
                break;
            }
            else{
                moedas= addmoney(moedas);
                let escolha = prompt("O que deseja comprar agora que não é mais pobre?");
            }
        }
        escolha = prompt("O que deseja?");
    }
    console.log("Total de itens: ",itens);

}

   
   
let itens = 0;
let moedas = 1000;
let escolha= prompt("deseja entrar na loja?\n1- SIM");
if(escolha == 1){
    loja(itens,moedas);
}

else{
    console.log("Então para quê vieste aqui?\n");
    escolha= prompt("deseja entrar na loja?");
}



   