const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)  

        // rolar os dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        // teste de habilidade
        let totalTesteSkill1 = 0
        let totalTesteSkill2 = 0

        if(block === "RETA"){
            totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

            logRollResult(player1.NOME,"velocidade",diceResult1, character1.VELOCIDADE)
            logRollResult(player2.NOME,"velocidade",diceResult2, character2.VELOCIDADE)
        }

        if(block === "CURVA"){
            totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            logRollResult(player1.NOME,"manobrabilidade",diceResult1, character1.MANOBRABILIDADE)
            logRollResult(player2.NOME,"manobrabilidade",diceResult2, character2.MANOBRABILIDADE)
        }

        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🤼`)

            logRollResult(player1.NOME,"poder",diceResult1, character1.PODER)
            logRollResult(player2.NOME,"poder",diceResult2, character2.PODER)


            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} lança um casco de 🐢 em ${character2.NOME}`)
                console.log(`${character1.NOME} venceu o confronto!🤩 ${character2.NOME} perdeu o confronto! 😵‍💫`)
                character2.PONTOS--;
            }

            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} lança um casco de 🐢 em ${character1.NOME}`)
                console.log(`${character2.NOME} venceu o confronto!🤩 ${character1.NOME} perdeu o confronto! 😵‍💫`)
                character1.PONTOS--;
            }

            console.log(powerResult2 === powerResult1 ? "Confronto empatado! nenhum ponto foi perdido" : "")

        }

        // verificando vencendor
        if(totalTesteSkill1 > totalTesteSkill2){
            console.log(`${character1.NOME} marcou 1 ponto !`);
            character1.PONTOS++;
        }else if(totalTesteSkill2 > totalTesteSkill1){
            console.log(`${character2.NOME} marcou 1 ponto !`);
            character2.PONTOS++;
        }

        console.log("-------------------------------------------------------------------------------")

    }
}

async function declareWinner(character1, character2){
    console.log("🏁 Resultado Final da Corrida");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns 🏆`);
    else if(character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns 🏆`);
    else
        console.log("A corrida terminou empatada")
    
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2)
})()

