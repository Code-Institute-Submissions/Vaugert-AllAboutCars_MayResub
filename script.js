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
    "correct_answer": "BYD",
    "incorrect_answers": ["Silant", "Dragon", "GAZ"]
}, {
    
    question: "Which of the following countries has officially banned the civilian use of dash cams in cars?",
    "correct_answer": "Austria",
    "incorrect_answers": ["United States", "Czechia", "South Korea"]
}, {
   
    question: "The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:",
    "correct_answer": "0.1m",
    "incorrect_answers": ["1m", "10m ", "100m"]
}, {
    
    question: "When was Tesla founded?",
    "correct_answer": "2003",
    "incorrect_answers": ["2008", "2005", "2007"]
}, {
   
    
    question: "Which one of these chassis codes are used by BMW 3-series?",
    "correct_answer": "E46",
    "incorrect_answers": ["E39", "E85", "F10"]
}, {
    
    question: "Which car is the first mass-produced hybrid vehicle?",
    "correct_answer": "Toyota Prius",
    "incorrect_answers": ["Chevrolet Volt", "Honda Fit", "Peugeot 308 R HYbrid"]
}, {
    
    question: "Which one is NOT the function of engine oil in car engines?",
    "correct_answer": "Combustion",
    "incorrect_answers": ["Lubrication", "Cooling", "Reduce corrosion"]
}, {
    
    question: "How much horsepower is produced by the SD40-2 Locomotive?",
    "correct_answer": "3,000",
    "incorrect_answers": ["3,200", "2,578", "2,190"]
}, {
   
    question: "Which one of the following is NOT a sub-company of the Volkswagen Group?",
    "correct_answer": "Opel",
    "incorrect_answers": ["Porsche", "Bugatti", "Bentley"]
}, {
   
    question: "Which car tire manufacturer is famous for its Zero line?",
    "correct_answer": "Pirelli",
    "incorrect_answers": ["Goodyear", "Bridgestone", "Michelin"]
}, {
   
    question: "When was Cadillac founded?",
    "correct_answer": "1902",
    "incorrect_answers": ["1964", "1898", "1985"]
}, {
    
    question: "The LS1 engine is how many cubic inches?",
    "correct_answer": "346",
    "incorrect_answers": ["350", "355", "360"]
}, {
    
    question: "The LS3 engine is how many cubic inches?",
    "correct_answer": "376",
    "incorrect_answers": ["346", "364", "427"]
}, {
   
    question: "What is the name of Nissans most popular electric car?",
    "correct_answer": "Leaf",
    "incorrect_answers": ["Tree", "Deer", "Roots"]
}, {
    
    question: "Which car manufacturer created the Aventador?",
    "correct_answer": "Lamborghini",
    "incorrect_answers": ["Ferrari", "Pagani", "Bugatti"]
}, {
    
    question: "What is the fastest road legal car in the world?",
    "correct_answer": "Koenigsegg Agera RS",
    "incorrect_answers": ["Hennessy Venom GT", "Bugatti Veyron Super Sport", "Pagani Huayra BC"]
}

]

   
