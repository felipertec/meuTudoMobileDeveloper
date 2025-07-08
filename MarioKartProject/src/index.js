class Player{
    constructor(NOME, VELOCIDADE, MANOBRABILIDADE, PODER, PONTOS){
        this.NOME = NOME;
        this.VELOCIDADE = VELOCIDADE;
        this.MANOBRABILIDADE = MANOBRABILIDADE;
        this.PODER = PODER;
        this.PONTOS = PONTOS;
    }
}

const player1 = new Player("Mario",4,3,3,0)
const player2 = new Player("Luigi",3,4,4,0)
const player3 = new Player("Peach",3,4,2,0)
const player4 = new Player("Yoshi",2,4,3,0)
const player5 = new Player("Bowser",5,2,5,0)
const player6 = new Player("Donkey Kong",2,2,5,0)

const player = [player1, player2, player3, player4, player5, player6]


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

            logRollResult(character1.NOME,"velocidade",diceResult1, character1.VELOCIDADE)
            logRollResult(character2.NOME,"velocidade",diceResult2, character2.VELOCIDADE)
        }

        if(block === "CURVA"){
            totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            logRollResult(character1.NOME,"manobrabilidade",diceResult1, character1.MANOBRABILIDADE)
            logRollResult(character2.NOME,"manobrabilidade",diceResult2, character2.MANOBRABILIDADE)
        }

        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🤼`)

            logRollResult(character1.NOME,"poder",diceResult1, character1.PODER)
            logRollResult(character2.NOME,"poder",diceResult2, character2.PODER)


            if(powerResult1 > powerResult2 && character2.PONTOS >= 0){
                await randomAttack(character1, character2)
            }

            if(powerResult2 > powerResult1 && character1.PONTOS >= 0){
                await randomAttack(character2, character1)
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

async function randomAttack(character, enemy){
    let attack = Math.floor(Math.random() * 2);

    if(attack == 0){
        console.log(`${character.NOME} lança um casco de 🐢 em ${enemy.NOME}`)
        console.log(`${character.NOME} venceu o confronto!🤩 ${enemy.NOME} perdeu o confronto! 😵‍💫`)
        enemy.PONTOS--;
        await luckyTurbo(character)
        if(enemy.PONTOS < 0){
            enemy.PONTOS = 0
        }else if(character.PONTOS < 0){
            character.PONTOS = 0
        }
        console.log(`${character.NOME}: ${character.PONTOS} ponto(s)`);
        console.log(`${enemy.NOME}: ${enemy.PONTOS} ponto(s)`);
    }else if(attack == 1){
        console.log(`${character.NOME} lança uma 💣 em ${enemy.NOME}`)
        console.log(`${character.NOME} venceu o confronto!🤩 ${enemy.NOME} perdeu o confronto! 😵‍💫`)
        enemy.PONTOS -= 2;
        await luckyTurbo(character)
        if(enemy.PONTOS < 0){
            enemy.PONTOS = 0
        }else if(character.PONTOS < 0){
            character.PONTOS = 0
        }
        console.log(`${character.NOME}: ${character.PONTOS} ponto(s)`);
        console.log(`${enemy.NOME}: ${enemy.PONTOS} ponto(s)`);
    }
}

async function luckyTurbo(character){
    let lucky = Math.floor(Math.random() * 2);
    if(lucky == 0){
        console.log(`${character.NOME} usa o turbo e ganha 1 ponto!  🏎️ 🎆 `)
        character.PONTOS++;
    }else{
        console.log(`${character.NOME} tenta usar o turbo mas ele falha! 😓 `)
    }
}

(async function main(){
    const p1 = Math.floor(Math.random() * 6)
    const p2 = Math.floor(Math.random() * 6)
    console.log(`🤖 Computador Sorteando os jogadores ... \n`)
    console.log(`🏁🚨 Corrida entre ${player[p1].NOME} e ${player[p2].NOME} começando ... \n`);
    await playRaceEngine(player[p1], player[p2]);
    await declareWinner(player[p1], player[p2])
})()

