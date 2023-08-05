// 1 - Constantes de Mensagens
const frontBackArray = ['Front-End', 'Back-End'];
const fronEndList    = ['React', 'Vue'];
const backEndList    = ['C#', 'Java'];
const opAddArray     = [
    'Seguir se especializando na área escolhida.', 
    'Seguir se desenvolvendo para se tornar Fullstack.'
];
const msgEspecializacao = 'Esse é o caminho para quem quer ser um expert no assunto. ';
const msgFullStack      = 'Continue assim que um dia você se tornara um FullStack.';
const wrongOption       = 'Escolha outra opção.';
const mensagemFinal     = 'Quais tecnologias você gostaria de se especializar ou aprender ?';
const maisTecnologias   = 'Gostaria de acrescentar mais alguma ?'; 

let learnLanguages = [];

// 2 - Funções Principais
let select1 = document.getElementById('select1-id');

select1.addEventListener('change', function(){
let choice1 = select1.value;
    if( choice1 === 'None' ){
        alert(wrongOption);
    }
    else{
        secondDropbox(choice1);    
    }
});

function secondDropbox(choice1){
    let select2Id = 'select2-id';
    let secondSelect = document.getElementById(select2Id);

    if( choice1 === frontBackArray[0] ){
        createOption(fronEndList, secondSelect);
    }
    else if( choice1 === frontBackArray[1] ){
        createOption(backEndList, secondSelect);
    }

    secondSelect.addEventListener('change', function(){
        if( secondSelect.value === 'None' ){
            alert(wrongOption);
        }
    });
    thirdDropBox();
}

function thirdDropBox(){
    let thirdSelect = document.getElementById('select3-id');
    createOption(opAddArray, thirdSelect);

    thirdSelect.addEventListener('change', function(){
        let choice3 = thirdSelect.value;
        
        if( choice3 === 'None' ){
            alert(wrongOption);
        }
        else if( choice3 === opAddArray[0]){
            alert(msgEspecializacao);
            newLanguagesFunction();    
        }
        else if( choice3 === opAddArray[1]){
            alert(msgFullStack);
            newLanguagesFunction();
        }
    });
}

// 3 - Funções Auxiliares
function createOption(arraySelected, secondSelect){
    arraySelected.forEach(function(element){
        let option = null;
        option = document.createElement('option');
        option.value = element;
        option.text = element;

        secondSelect.appendChild(option);
    });
}

function newLanguagesFunction(){
    let tecnologia1 = prompt(mensagemFinal);
    learnLanguages.push(tecnologia1);
    recursao(learnLanguages);
}

function recursao(learnLanguages){
    let tecnologia2 = prompt(maisTecnologias);

    let condicao1 = tecnologia2 === 'Não' ? true : false;
    let condicao2 = tecnologia2 === 'Nao' ? true : false;
    let condicao3 = tecnologia2 === 'não' ? true : false;
    let condicao4 = tecnologia2 === 'nao' ? true : false;

    if (condicao1 || condicao2 || condicao3 || condicao4){
        alert(learnLanguages);
    }
    else{
        learnLanguages.push(tecnologia2);
        recursao(learnLanguages);
    }
}