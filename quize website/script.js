const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Lion", "Giraffe", "Elephant", "Blue Whale"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.innerText = questions[currentQuestion].question;
        optionsElement.innerHTML = "";
        questions[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', loadQuestion);

loadQuestion();
