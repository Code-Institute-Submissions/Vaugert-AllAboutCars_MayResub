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
    question.answer
}

function checkAnswer () {

}

const questions= [
    {
   
    question: "Where are the cars of the brand Ferrar manufactured?",
    answers: [
    { text: "Italy", correct: true },
    { text: "Romania",   correct: false },
    {text: "Germany", correct: false},
    {text:"Russia", correct:false }
]
}
, {
   
    question: "What was the name of the first front-wheel-drive car produced by Datsun (now Nissan)?",
    answers: [
    {text: "Cherry", correct: true},
    {text: "Sunny",  correct:false },
    {text: "Bluebird", correct:false },
    {text: "Skyline", correct: false},
]
}, {
   
    
    question: "Which of the following is NOT a Russian car manufacturer?",
    answers: [
    {text: "BYD", correct:true},
    {text: "Silant", correct:false },
    {text:"Dragon", correct:false}
    {text:"GAZ" , correct:false},
    ]
}, {
    
    question: "Which of the following countries has officially banned the civilian use of dash cams in cars?",
    answers: [
    {text: "Austria",correct:true},
    {text: "United States", correct:false}, 
    {text:"Czechia", correct:false },
    {text: "South Korea", correct:false },
    ]
}, {
   
    question: "The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:",
    answers: [
    {text: "0.1m", correct:true},
    {text: "10m ", correct:false} ,
    {text: "1m", correct:false},
    {text: "100m", correct:false},
    ]
}, {
    
    question: "When was Tesla founded?",
    answers: [
    {text: "2003", correct:true},
    {text: "2005", correct:false}, 
    {text: "2008", correct:false},
    {text: "2007", correct:false},
    ]
}, {
   
    
    question: "Which one of these chassis codes are used by BMW 3-series?",
    answers: [
    {text:"E46", correct:true}, 
    {text:"E39", correct:false},
    {text:"E85", correct:false},
    {text:"F10", correct:false},
    ]
}, {
    
    question: "Which car is the first mass-produced hybrid vehicle?",
    answers: [
    {text:"Toyota Prius", correct:true},
    {text: "Chevrolet Volt", correct:false}, 
    {text:"Honda Fit", correct:false},
    {text:"Peugeot 308 R HYbrid", correct:false},
    ]
}, {
    
    question: "Which one is NOT the function of engine oil in car engines?",
    answers: [
    "correct_answer": "Combustion",
    "incorrect_answers": "Lubrication", "Cooling", "Reduce corrosion"
    {text:}
    {text:}
}, {
    
    question: "How much horsepower is produced by the SD40-2 Locomotive?",
    answers: [
    "correct_answer": "3,000",
    "incorrect_answers": "3,200", "2,578", "2,190"
    {text:}
    {text:}
}, {
   
    question: "Which one of the following is NOT a sub-company of the Volkswagen Group?",
    answers: [
    "correct_answer": "Opel",
    "incorrect_answers": "Porsche", "Bugatti", "Bentley"
    {text:}
    {text:}
}, {
   
    question: "Which car tire manufacturer is famous for its Zero line?",
    answers: [
    "correct_answer": "Pirelli",
    "incorrect_answers": "Goodyear", "Bridgestone", "Michelin"
    {text:}
    {text:}
}, {
   
    question: "When was Cadillac founded?",
    answers: [
    "correct_answer": "1902",
    "incorrect_answers": "1964", "1898", "1985"
    {text:}
    {text:}
}, {
    
    question: "The LS1 engine is how many cubic inches?",
    answers: [
    "correct_answer": "346",
    "incorrect_answers": "350", "355", "360"
    {text:}
    {text:}
}, {
    
    question: "The LS3 engine is how many cubic inches?",
    answers: [
    "correct_answer": "376",
    "incorrect_answers": "346", "364", "427"
    {text:}
    {text:}
}, {
   
    question: "What is the name of Nissans most popular electric car?",
    answers: [
    "correct_answer": "Leaf",
    "incorrect_answers": "Tree", "Deer", "Roots"
    {text:}
    {text:}
}, {
    
    question: "Which car manufacturer created the Aventador?",
    answers: [
    "correct_answer": "Lamborghini",
    "incorrect_answers": "Ferrari", "Pagani", "Bugatti"
    {text:}
    {text:}
}, {
    
    question: "What is the fastest road legal car in the world?",
    answers: [
    "correct_answer": "Koenigsegg Agera RS",
    "incorrect_answers": "Hennessy Venom GT", "Bugatti Veyron Super Sport", "Pagani Huayra BC"
    {text:}
    {text:}
}

]

   
