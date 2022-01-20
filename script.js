const startButton = document.getElementById('start-btn'); 
const questionContainer = document.getElementById('question-container') ;
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-btn') ;

let randomQuestion, questionIndex

startButton.addEventListener('click', runGame); 

function runGame() {
    
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - 0.5)
    questionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion() {
    showQuestion(randomQuestion[questionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function checkAnswer () {

}

const questions = [ {
    question: 'Which is the fastest car in the World?' ,
    answers: [
        {text:'buggati' } ,
        {text:'lambo'}
        ]

    }
]