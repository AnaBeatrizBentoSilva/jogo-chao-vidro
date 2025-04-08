function jogar(){
    rodada = 1
    // while (rodada <= 3) {
    //     console.log("Rodada " + rodada)

    //     escolhaJogador = prompt("Nível " + rodada + ", escolha vidro (1, 2 ou 3):")

    //     escolhaJogador = parseInt(escolhaJogador);
        
    //     if (escolhaJogador !== 1 && escolhaJogador !== 2 && escolhaJogador !== 3) {
    //         alert("Escolha inválida! Digite 1, 2 ou 3.");
    //         continue; 
    //     }

    //     pisoquebrado = Math.floor(Math.random() * 3) + 1
        
    //     if (escolhaJogador == pisoquebrado) {
    //         alert("Você quebrou o vidro! Acabou o jogo para você!!!")
    //         rodada = 4
    //     }else{
    //         alert("Passou! Piso quebrado estava na ponte: " + pisoquebrado)
    //     }
    //     rodada = rodada + 1
    // }

    // if (rodada == 4) {
    //     alert("Você venceu! Parabéns!!!")
    // }

    ganhou = 0 

    for (let rodada = 1; rodada <= 3; rodada++) {
        console.log("Rodada " + rodada)

        escolhaJogador = prompt("Nível " + rodada + ", escolha vidro (1, 2 ou 3):")

        escolhaJogador = parseInt(escolhaJogador);
        
        if (escolhaJogador !== 1 && escolhaJogador !== 2 && escolhaJogador !== 3) {
            alert("Escolha inválida! Digite 1, 2 ou 3.")
            continue
        }

        pisoquebrado = Math.floor(Math.random() * 3) + 1
        
        if (escolhaJogador == pisoquebrado) {
            alert("Você quebrou o vidro! Acabou o jogo para você!!!")
            rodada = 4
            ganhou = 1
        }else{
            alert("Passou! Piso quebrado estava na ponte: " + pisoquebrado)
        }
    }

    if (ganhou == 0) {
        alert("Você venceu! Parabéns!!!")
    }
}