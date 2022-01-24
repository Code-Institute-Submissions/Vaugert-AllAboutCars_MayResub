const startButton = document.getElementById('start-btn'); 
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container') ;
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-btn') ;

let randomQuestion, questionIndex

startButton.addEventListener('click', runGame); 
nextButton.addEventListener('click', () => {
    questionIndex ++
    setNextQuestion()

})

function runGame() {
    
    startButton.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - 0.5)
    questionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion() {
    resetTable()
    showQuestion(randomQuestion[questionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>  {
        const button = document.createElement('button') 
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
        button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerButtons.appendChild(button)

    })
    
}

function resetTable() {
    clearStatus(document.body)
    nextButton.classList.add('hide')

    while (answerButtons.firstChild)    
      answerButtons.removeChild
        (answerButtons.firstChild)
         
    
        
}



function checkAnswer (e) {
    let selectedAnswer = e.target
    let correct = selectedAnswer.dataset.correct
    setStatus(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (randomQuestion.length > questionIndex +1 ){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
}

function setStatus(element, correct) { 
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else  {
        element.classList.add('wrong')
    }

}

function clearStatus (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}



const questions= [
    {
   
    question: "Where are the cars of the brand Ferrari manufactured?",
    answers: [
    
    { text: "Romania",   correct: false },
    {text: "Germany", correct: false},
    {text:"Russia", correct:false },
    { text: "Italy", correct: true }
]
}
, {
   
    question: "What was the name of the first front-wheel-drive car produced by Datsun (now Nissan)?",
    answers: [
    
    {text: "Sunny",  correct:false },
    {text: "Cherry", correct: true},
    {text: "Bluebird", correct:false },
    {text: "Skyline", correct: false}
]
}, {
   
    
    question: "Which of the following is NOT a Russian car manufacturer?",
    answers: [
   
    {text: "Silant", correct:false },
    {text: "BYD", correct:true},
    {text:"Dragon", correct:false},
    {text:"GAZ" , correct:false}
    ]
}, {
    
    question: "Which of the following countries has officially banned the civilian use of dash cams in cars?",
    answers: [
    {text: "Austria",correct:true},
    {text: "United States", correct:false}, 
    {text:"Czechia", correct:false },
    {text: "South Korea", correct:false }
    ]
}, {
   
    question: "The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:",
    answers: [
    
    {text: "10m ", correct:false} ,
    {text: "1m", correct:false},
    {text: "0.1m", correct:true},
    {text: "100m", correct:false}
    ]
}, {
    
    question: "When was Tesla founded?",
    answers: [
    {text: "2003", correct:true},
    {text: "2005", correct:false}, 
    {text: "2008", correct:false},
    {text: "2007", correct:false}
    ]
}, {
   
    
    question: "Which one of these chassis codes are used by BMW 3-series?",
    answers: [
     
    {text:"E39", correct:false},
    {text:"E46", correct:true},
    {text:"E85", correct:false},
    {text:"F10", correct:false}
    ]
}, {
    
    question: "Which car is the first mass-produced hybrid vehicle?",
    answers: [
    
    {text: "Chevrolet Volt", correct:false}, 
    {text:"Honda Fit", correct:false},
    {text:"Toyota Prius", correct:true},
    {text:"Peugeot 308 R Hybrid", correct:false}
    ]
}, {
    
    question: "Which one is NOT the function of engine oil in car engines?",
    answers: [
   
    {text: "Lubrication", correct:false}, 
    {text: "Cooling", correct:false},
    {text: "Reduce corrosion", correct:false},
    {text: "Combustion",correct:true }
    ]
}, {
    
    question: "How much horsepower is produced by the SD40-2 Locomotive?",
    answers: [
    
    {text: "3,200", correct:false},
    {text: "3,000", correct:true},
    {text:"2,578", correct:false},
    {text:"2,190", correct:false}
    ]
}, {
   
    question: "Which one of the following is NOT a sub-company of the Volkswagen Group?",
    answers: [
    
    {text: "Porsche", correct:false},
    {text:"Opel", correct:true},  
    {text:"Bugatti", correct:false},
    {text:"Bentley",correct:false}
    ]
}, {
   
    question: "Which car tire manufacturer is famous for its Zero line?",
    answers: [
    
    {text:"Goodyear", correct:false},
    {text:"Pirelli", correct:true},
    {text:"Bridgestone", correct:false},
    {text:"Michelin", correct:false}
    ]
}, {
   
    question: "When was Cadillac founded?",
    answers: [
    
    {text: "1964", correct:false},  
    {text: "1898", correct:false},
    {text: "1902", correct:true},
    {text: "1985", correct:false}
    ]
}, {
    
    question: "The LS1 engine is how many cubic inches?",
    answers: [
    
    {text:"350", correct:false},
    {text:"346", correct:true},    
    {text:"355", correct:false},
    {text:"360", correct:false}
    ]
}, {
    
    question: "The LS3 engine is how many cubic inches?",
    answers: [
    
    {text:"346", correct:false},   
    {text:"364", correct:false},
    {text:"376", correct:true},
    {text:"427", correct:false}
    ]
}, {
   
    question: "What is the name of Nissans most popular electric car?",
    answers: [
    {text : "Leaf", correct:true},
    {text: "Tree", correct:false}, 
    {text:"Deer", correct:false},
    {text:"Roots",correct:false}
    ]
}, {
    
    question: "Which car manufacturer created the Aventador?",
    answers: [
    
    {text: "Ferrari", correct:false} , 
    {text: "Lamborghini", correct:true},
    {text:"Pagani", correct:false},
    {text:"Bugatti", correct:false}
    ]
}, {
    
    question: "What is the fastest road legal car in the world?",
    answers: [
     
    {text:"Hennessy Venom GT", correct:false},   
    {text:"Bugatti Veyron Super Sport", correct:false},
    {text:"Koenigsegg Agera RS", correct:true},
    {text:"Pagani Huayra BC" , correct:false}
    ]
    }

]

   
