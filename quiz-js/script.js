let currentQuestion = 0;
let response = 0;

showQuestion()

document.querySelector('.scoreArea button').addEventListener('click', limpar)

function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100)
        document.querySelector('.progress--bar').style.width =`${pct}%`

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question

        let optionsHtml = '';
        for(let i in q.options){
            optionsHtml +=`<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent)
        })

    }else{
        finish();
    }
}


function optionClickEvent(e){
    let clicko = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clicko){
        response++;

    }

    currentQuestion++;
    showQuestion();
}
 
function finish(){
    let points = Math.floor((response / questions.length) * 100);

    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em, vamos melhorar !'
        document.querySelector('.scorePct').style.color = 'red'
    }else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'Opa,quase lá !'
        document.querySelector('.scorePct').style.color = 'yellow'
    }else{
        document.querySelector('.scoreText1').innerHTML = 'Parabéns !'
        document.querySelector('.scorePct').style.color = 'green'
    }

    document.querySelector('.scorePct').innerHTML = `Você acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões acertou ${response}`;


    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = '100%' 

}

function limpar(){
    currentQuestion = 0;
    response = 0;

    showQuestion();
}

    