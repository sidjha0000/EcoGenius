document.addEventListener("DOMContentLoaded", function () {
    const startQuizBtn = document.getElementById("start-quiz");
    const quizContainer = document.getElementById("quiz-container");
    const quizDiv = document.getElementById("quiz");
    const nextQuestionBtn = document.getElementById("next-question");
    const resultContainer = document.getElementById("result-container");
    const finalScoreDisplay = document.getElementById("final-score");
    const scoreMessage = document.getElementById("score-message");
    const progressBar = document.getElementById("progress-bar");
    const recommendations = document.getElementById("recommendations");
    const restartQuizBtn = document.getElementById("restart-quiz");

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        { question: "Do you recycle regularly?", options: ["Yes", "No"], score: [10, 0] },
        { question: "How often do you use public transport?", options: ["Always", "Sometimes", "Never"], score: [10, 5, 0] },
        { question: "Do you use energy-efficient appliances?", options: ["Yes", "No"], score: [10, 0] },
        { question: "Do you carry a reusable water bottle?", options: ["Yes", "No"], score: [10, 0] },
        { question: "How often do you eat plant-based meals?", options: ["Often", "Sometimes", "Never"], score: [10, 5, 0] }
    ];

    startQuizBtn.addEventListener("click", () => {
        document.querySelector(".score-section").classList.add("hidden");
        quizContainer.classList.remove("hidden");
        loadQuestion();
    });

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResult();
            return;
        }

        quizDiv.innerHTML = `<h3>${questions[currentQuestionIndex].question}</h3>`;
        questions[currentQuestionIndex].options.forEach((option, index) => {
            let button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => {
                score += questions[currentQuestionIndex].score[index];
                currentQuestionIndex++;
                updateProgress();
                loadQuestion();
            };
            quizDiv.appendChild(button);
        });
    }

    function updateProgress() {
        let progress = (currentQuestionIndex / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResult() {
        quizContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        finalScoreDisplay.innerText = score;

        let message = "";
        let tips = "";

        if (score >= 40) {
            message = "Excellent! You're an Eco Warrior 🌱!";
            tips = "Keep up the great work! Consider influencing others to adopt sustainable habits.";
        } else if (score >= 20) {
            message = "Good job! You're eco-conscious 🌍.";
            tips = "Try using public transport more and reducing plastic usage.";
        } else {
            message = "You can do better! ♻️";
            tips = "Start small by recycling, using a reusable bottle, and reducing food waste.";
        }

        scoreMessage.innerText = message;
        recommendations.innerText = `Tip: ${tips}`;
    }

    restartQuizBtn.addEventListener("click", () => {
        score = 0;
        currentQuestionIndex = 0;
        progressBar.style.width = "0%";
        resultContainer.classList.add("hidden");
        document.querySelector(".score-section").classList.remove("hidden");
    });
});


