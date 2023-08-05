const readline = require('readline');

const msg1 = ' Você deseja seguir para área de Front-End ou Back-End? \n';
const msg2 = ' Você deseja aprender React ou Vue? \n';
const msg3 = ' Você deseja aprender C# ou Java? \n';
const msg4 = ' Você deseja seguir se especializando na área \n ou \n Seguir se desenvolvendo para se tornar FullStack? \n Digite 1 para especialização e 2 para FullStack. \n';
const msg5 = ' Continue se especializando que você um dia chega la. \n';
const msg6 = ' Continue estudando novas tecnologias para se tornar um FullStack. \n';
const msgFinal = ' Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer ? \n';
const mensagemLoop = ' Gostaria de aprender mais alguma coisa? \n';

let lista = [];

let saida = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

saida.question(msg1, area => {
    answerArea(saida, area)
});

function answerArea(saida, area){
    let msg = area === 'Front-End' ? msg2 : msg3;

    saida.question(msg, opcao => {
        console.log(`Boa sorte no aprendizado de ${opcao}`)

        especializacao(saida);
    });
}

function especializacao(saida){
    let mensagem;
    saida.question(msg4, expec => {
        if(expec == 1){
            mensagem = msg5;
        }
        else if(expec == 2){
            mensagem = msg6;
        }
        else{
            mensagem = 'opção Incorreta.';
        }

        console.log(mensagem);
        
        final(saida);
    });
}

function final(saida){
    saida.question(msgFinal, ex => {
        lista.push(ex);

        continuacao(saida, lista);
    });
}

function continuacao(saida, lista){
    saida.question(mensagemLoop, resposta => {
        if(resposta === 'Nao'){
            console.log(lista);
            saida.close();
        }
        else{
            lista.push(resposta);
            continuacao(saida, lista);
        }
    })
}