/* =====================================================
   EDUQUEST
   Educational Quiz Game
   ===================================================== */


/* =====================================================
   QUESTION BANK
   ===================================================== */

const questions = [

    /* ================= MATHEMATICS ================= */

    {
        category: "math",
        difficulty: "easy",
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12",
        explanation: "When we add 5 and 7, the result is 12."
    },

    {
        category: "math",
        difficulty: "easy",
        question: "What is 20 ÷ 4?",
        options: ["4", "5", "6", "8"],
        answer: "5",
        explanation: "20 divided by 4 equals 5."
    },

    {
        category: "math",
        difficulty: "easy",
        question: "Which number is even?",
        options: ["7", "11", "14", "19"],
        answer: "14",
        explanation: "14 is even because it can be divided by 2 without a remainder."
    },

    {
        category: "math",
        difficulty: "medium",
        question: "What is 12 × 8?",
        options: ["86", "96", "108", "112"],
        answer: "96",
        explanation: "12 multiplied by 8 equals 96."
    },

    {
        category: "math",
        difficulty: "medium",
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "14"],
        answer: "12",
        explanation: "144 divided by 12 equals 12."
    },

    {
        category: "math",
        difficulty: "medium",
        question: "What is 25% of 100?",
        options: ["10", "20", "25", "50"],
        answer: "25",
        explanation: "25% means 25 out of every 100."
    },

    {
        category: "math",
        difficulty: "hard",
        question: "What is 15 × 14?",
        options: ["190", "200", "210", "220"],
        answer: "210",
        explanation: "15 × 14 = 210."
    },

    {
        category: "math",
        difficulty: "hard",
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: "12",
        explanation: "12 × 12 = 144, so the square root is 12."
    },


    /* ================= SCIENCE ================= */

    {
        category: "science",
        difficulty: "easy",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars appears reddish because of iron minerals on its surface."
    },

    {
        category: "science",
        difficulty: "easy",
        question: "What is H₂O commonly called?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        answer: "Water",
        explanation: "H₂O is the chemical formula for water."
    },

    {
        category: "science",
        difficulty: "easy",
        question: "How many legs does a spider have?",
        options: ["4", "6", "8", "10"],
        answer: "8",
        explanation: "Spiders are arachnids and have eight legs."
    },

    {
        category: "science",
        difficulty: "medium",
        question: "Which gas do plants use during photosynthesis?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ],
        answer: "Carbon dioxide",
        explanation: "Plants take in carbon dioxide and use it during photosynthesis."
    },

    {
        category: "science",
        difficulty: "medium",
        question: "Which organ pumps blood around the body?",
        options: [
            "Lungs",
            "Heart",
            "Brain",
            "Stomach"
        ],
        answer: "Heart",
        explanation: "The heart pumps blood throughout the body."
    },

    {
        category: "science",
        difficulty: "medium",
        question: "What force pulls objects toward Earth?",
        options: [
            "Magnetism",
            "Friction",
            "Gravity",
            "Electricity"
        ],
        answer: "Gravity",
        explanation: "Gravity is the force that attracts objects toward Earth."
    },

    {
        category: "science",
        difficulty: "hard",
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au",
        explanation: "The chemical symbol for gold is Au, from the Latin word aurum."
    },

    {
        category: "science",
        difficulty: "hard",
        question: "Which part of a cell contains genetic material?",
        options: [
            "Cell wall",
            "Nucleus",
            "Cytoplasm",
            "Membrane"
        ],
        answer: "Nucleus",
        explanation: "In most eukaryotic cells, DNA is stored inside the nucleus."
    },


    /* ================= GENERAL KNOWLEDGE ================= */

    {
        category: "gk",
        difficulty: "easy",
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "Hyderabad",
            "New Delhi",
            "Chennai"
        ],
        answer: "New Delhi",
        explanation: "New Delhi is the capital city of India."
    },

    {
        category: "gk",
        difficulty: "easy",
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "A week contains seven days."
    },

    {
        category: "gk",
        difficulty: "easy",
        question: "Which is the largest ocean?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean",
        explanation: "The Pacific Ocean is the largest ocean on Earth."
    },

    {
        category: "gk",
        difficulty: "easy",
        question: "Which animal is commonly called the King of the Jungle?",
        options: [
            "Tiger",
            "Lion",
            "Elephant",
            "Bear"
        ],
        answer: "Lion",
        explanation: "The lion is traditionally known as the King of the Jungle."
    },

    {
        category: "gk",
        difficulty: "medium",
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "There are seven commonly recognized continents."
    },

    {
        category: "gk",
        difficulty: "medium",
        question: "Which is the largest planet in our Solar System?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],
        answer: "Jupiter",
        explanation: "Jupiter is the largest planet in our Solar System."
    },

    {
        category: "gk",
        difficulty: "hard",
        question: "Which is the smallest continent by land area?",
        options: [
            "Europe",
            "Australia",
            "South America",
            "Antarctica"
        ],
        answer: "Australia",
        explanation: "Australia is the smallest continent by land area."
    },

    {
        category: "gk",
        difficulty: "hard",
        question: "Which planet is famous for its prominent rings?",
        options: [
            "Mars",
            "Venus",
            "Saturn",
            "Mercury"
        ],
        answer: "Saturn",
        explanation: "Saturn is famous for its extensive system of icy rings."
    }

];


/* =====================================================
   GAME SETTINGS
   ===================================================== */

const TOTAL_QUESTIONS = 10;
const QUESTION_TIME = 15;
const BASE_POINTS = 10;
const STREAK_BONUS = 2;
const STARTING_LIVES = 3;


/* =====================================================
   GAME VARIABLES
   ===================================================== */

let gameQuestions = [];

let currentQuestion = 0;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let lives = STARTING_LIVES;

let streak = 0;

let bestStreak = 0;

let playerName = "";

let currentCategory = "";

let currentDifficulty = "";

let timeLeft = QUESTION_TIME;

let timer = null;

let questionAnswered = false;


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const startScreen =
    document.getElementById("start-screen");

const gameScreen =
    document.getElementById("game-screen");

const resultScreen =
    document.getElementById("result-screen");

const leaderboardScreen =
    document.getElementById("leaderboard-screen");


const playerNameInput =
    document.getElementById("player-name");

const categorySelect =
    document.getElementById("category");

const difficultySelect =
    document.getElementById("difficulty");


const startBtn =
    document.getElementById("start-btn");

const nextBtn =
    document.getElementById("next-btn");

const playAgainBtn =
    document.getElementById("play-again-btn");

const leaderboardBtn =
    document.getElementById("leaderboard-btn");

const resultLeaderboardBtn =
    document.getElementById("result-leaderboard-btn");

const backBtn =
    document.getElementById("back-btn");

const clearLeaderboardBtn =
    document.getElementById("clear-leaderboard");


/* =====================================================
   START GAME
   ===================================================== */

startBtn.addEventListener("click", startGame);


function startGame() {

    playerName =
        playerNameInput.value.trim();

    if (!playerName) {

        alert("Please enter your name! 😊");

        playerNameInput.focus();

        return;
    }


    currentCategory =
        categorySelect.value;

    currentDifficulty =
        difficultySelect.value;


    let filteredQuestions;


    /*
       First filter by category
    */

    if (currentCategory === "mixed") {

        filteredQuestions =
            questions.filter(
                q => q.difficulty === currentDifficulty
            );

    } else {

        filteredQuestions =
            questions.filter(
                q =>
                    q.category === currentCategory &&
                    q.difficulty === currentDifficulty
            );
    }


    /*
       If there aren't enough questions
       for the selected combination,
       use all questions from the selected
       category/difficulty where possible.
    */

    if (filteredQuestions.length < TOTAL_QUESTIONS) {

        if (currentCategory === "mixed") {

            filteredQuestions =
                questions.filter(
                    q => q.difficulty === currentDifficulty
                );

        } else {

            filteredQuestions =
                questions.filter(
                    q => q.category === currentCategory
                );
        }
    }


    /*
       If still fewer than 10,
       use the available questions.
    */

    shuffleArray(filteredQuestions);

    gameQuestions =
        filteredQuestions.slice(
            0,
            Math.min(TOTAL_QUESTIONS, filteredQuestions.length)
        );


    /*
       Reset game
    */

    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    lives = STARTING_LIVES;

    streak = 0;

    bestStreak = 0;


    updateGameStats();


    /*
       Change screen
    */

    startScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    leaderboardScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    showQuestion();
}


/* =====================================================
   SHOW QUESTION
   ===================================================== */

function showQuestion() {

    clearInterval(timer);

    questionAnswered = false;

    timeLeft = QUESTION_TIME;


    const question =
        gameQuestions[currentQuestion];


    /*
       Question number
    */

    document.getElementById("question-number").textContent =
        `${currentQuestion + 1}/${gameQuestions.length}`;


    /*
       Question text
    */

    document.getElementById("question").textContent =
        question.question;


    /*
       Category
    */

    document.getElementById("category-badge").textContent =
        getCategoryName(question.category);


    /*
       Feedback reset
    */

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className =
        "feedback";


    /*
       Explanation reset
    */

    document.getElementById("explanation")
        .classList.add("hidden");

    document.getElementById("explanation-text")
        .textContent = "";


    /*
       Next button
    */

    nextBtn.classList.add("hidden");


    /*
       Progress bar
    */

    const progress =
        (currentQuestion / gameQuestions.length) * 100;

    document.getElementById("progress")
        .style.width = `${progress}%`;


    /*
       Timer
    */

    updateTimer();


    /*
       Create options
    */

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    /*
       Shuffle answer choices
       without modifying original data
    */

    const shuffledOptions =
        [...question.options];

    shuffleArray(shuffledOptions);


    shuffledOptions.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.textContent = option;

        button.addEventListener(
            "click",
            () => checkAnswer(button, option)
        );

        optionsContainer.appendChild(button);
    });


    startTimer();
}


/* =====================================================
   TIMER
   ===================================================== */

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            handleTimeUp();
        }

    }, 1000);
}


function updateTimer() {

    const timerElement =
        document.getElementById("timer");

    timerElement.textContent =
        timeLeft;


    if (timeLeft <= 5) {

        timerElement.classList.add(
            "timer-warning"
        );

    } else {

        timerElement.classList.remove(
            "timer-warning"
        );
    }
}


/* =====================================================
   TIME UP
   ===================================================== */

function handleTimeUp() {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    wrongAnswers++;

    streak = 0;

    loseLife();


    const question =
        gameQuestions[currentQuestion];


    disableOptions();


    /*
       Highlight correct answer
    */

    highlightCorrectAnswer(
        question.answer
    );


    document.getElementById("feedback").textContent =
        "⏰ Time's up!";


    document.getElementById("feedback").className =
        "feedback wrong";


    showExplanation(
        question.explanation
    );


    nextBtn.classList.remove("hidden");

    updateGameStats();
}


/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkAnswer(
    button,
    selectedAnswer
) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    clearInterval(timer);


    const question =
        gameQuestions[currentQuestion];


    disableOptions();


    if (selectedAnswer === question.answer) {

        /*
           Correct answer
        */

        button.classList.add("correct");

        correctAnswers++;

        streak++;

        if (streak > bestStreak) {

            bestStreak = streak;
        }


        /*
           Base points
        */

        score += BASE_POINTS;


        /*
           Streak bonus
           Starts after 3 consecutive correct answers.
        */

        if (streak >= 3) {

            score += STREAK_BONUS;

            document.getElementById("feedback").textContent =
                `🎉 Correct! +${BASE_POINTS + STREAK_BONUS} points! 🔥`;
        } else {

            document.getElementById("feedback").textContent =
                `🎉 Correct! +${BASE_POINTS} points!`;
        }


        document.getElementById("feedback").className =
            "feedback correct";


    } else {

        /*
           Wrong answer
        */

        button.classList.add("wrong");

        wrongAnswers++;

        streak = 0;

        loseLife();


        highlightCorrectAnswer(
            question.answer
        );


        document.getElementById("feedback").textContent =
            `❌ Not quite! The correct answer is "${question.answer}".`;


        document.getElementById("feedback").className =
            "feedback wrong";
    }


    showExplanation(
        question.explanation
    );


    nextBtn.classList.remove("hidden");

    updateGameStats();
}


/* =====================================================
   DISABLE OPTIONS
   ===================================================== */

function disableOptions() {

    const options =
        document.querySelectorAll(".option");

    options.forEach(option => {

        option.disabled = true;

    });
}


/* =====================================================
   HIGHLIGHT CORRECT ANSWER
   ===================================================== */

function highlightCorrectAnswer(
    correctAnswer
) {

    const options =
        document.querySelectorAll(".option");

    options.forEach(option => {

        if (
            option.textContent === correctAnswer
        ) {

            option.classList.add("correct");
        }
    });
}


/* =====================================================
   SHOW EXPLANATION
   ===================================================== */

function showExplanation(text) {

    document.getElementById("explanation-text")
        .textContent = text;

    document.getElementById("explanation")
        .classList.remove("hidden");
}


/* =====================================================
   LOSE LIFE
   ===================================================== */

function loseLife() {

    if (lives > 0) {

        lives--;

    }
}


/* =====================================================
   UPDATE GAME STATS
   ===================================================== */

function updateGameStats() {

    document.getElementById("score")
        .textContent = score;


    document.getElementById("streak")
        .textContent = `${streak} 🔥`;


    let hearts = "";

    for (
        let i = 0;
        i < STARTING_LIVES;
        i++
    ) {

        if (i < lives) {

            hearts += "❤️";

        } else {

            hearts += "🖤";
        }
    }


    document.getElementById("lives")
        .textContent = hearts;
}


/* =====================================================
   NEXT QUESTION
   ===================================================== */

nextBtn.addEventListener(
    "click",
    nextQuestion
);


function nextQuestion() {

    currentQuestion++;


    /*
       Check whether all questions are completed
    */

    if (
        currentQuestion >= gameQuestions.length
    ) {

        endGame();

        return;
    }


    /*
       Continue game
    */

    showQuestion();
}


/* =====================================================
   END GAME
   ===================================================== */

function endGame() {

    clearInterval(timer);


    gameScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    /*
       Accuracy
    */

    const total =
        correctAnswers + wrongAnswers;

    const accuracy =
        total === 0
            ? 0
            : Math.round(
                (correctAnswers / total) * 100
            );


    /*
       Result message
    */

    let message;


    if (accuracy >= 90) {

        message =
            `🌟 Amazing, ${playerName}! You're a quiz superstar!`;

    } else if (accuracy >= 70) {

        message =
            `👏 Great job, ${playerName}! Keep going!`;

    } else if (accuracy >= 50) {

        message =
            `😊 Good effort, ${playerName}! A little more practice will help!`;

    } else {

        message =
            `💪 Keep practicing, ${playerName}! Every game helps you learn!`;
    }


    document.getElementById("result-message")
        .textContent = message;


    /*
       Result statistics
    */

    document.getElementById("final-score")
        .textContent = score;

    document.getElementById("max-score")
        .textContent =
        `out of ${gameQuestions.length * BASE_POINTS}`;

    document.getElementById("correct-count")
        .textContent = correctAnswers;

    document.getElementById("wrong-count")
        .textContent = wrongAnswers;

    document.getElementById("accuracy")
        .textContent = `${accuracy}%`;

    document.getElementById("best-streak")
        .textContent = bestStreak;


    /*
       Save score
    */

    saveScore();


    /*
       Display best score
    */

    const bestScore =
        getBestPlayerScore();

    document.getElementById("best-score")
        .textContent = bestScore;
}


/* =====================================================
   SAVE SCORE
   ===================================================== */

function saveScore() {

    let leaderboard =
        getLeaderboard();


    const accuracy =
        Math.round(
            (correctAnswers /
                (correctAnswers + wrongAnswers)) * 100
        );


    const entry = {

        name: playerName,

        score: score,

        accuracy: accuracy,

        difficulty: currentDifficulty,

        category: currentCategory,

        date: new Date().toLocaleDateString()

    };


    leaderboard.push(entry);


    /*
       Sort highest score first
    */

    leaderboard.sort(
        (a, b) => b.score - a.score
    );


    /*
       Keep only top 10
    */

    leaderboard =
        leaderboard.slice(0, 10);


    localStorage.setItem(
        "eduQuestScores",
        JSON.stringify(leaderboard)
    );
}


/* =====================================================
   GET LEADERBOARD
   ===================================================== */

function getLeaderboard() {

    return JSON.parse(
        localStorage.getItem(
            "eduQuestScores"
        )
    ) || [];
}


/* =====================================================
   GET PLAYER'S BEST SCORE
   ===================================================== */

function getBestPlayerScore() {

    const leaderboard =
        getLeaderboard();


    const playerScores =
        leaderboard.filter(
            entry =>
                entry.name.toLowerCase() ===
                playerName.toLowerCase()
        );


    if (playerScores.length === 0) {

        return score;
    }


    return Math.max(
        ...playerScores.map(
            entry => entry.score
        )
    );
}


/* =====================================================
   DISPLAY LEADERBOARD
   ===================================================== */

function displayLeaderboard() {

    const leaderboard =
        getLeaderboard();


    const list =
        document.getElementById(
            "leaderboard"
        );


    const emptyMessage =
        document.getElementById(
            "empty-leaderboard"
        );


    list.innerHTML = "";


    if (leaderboard.length === 0) {

        emptyMessage.classList.remove(
            "hidden"
        );

        return;
    }


    emptyMessage.classList.add(
        "hidden"
    );


    leaderboard.forEach(
        (entry, index) => {

            const item =
                document.createElement("li");


            let medal;


            if (index === 0) {

                medal = "🥇";

            } else if (index === 1) {

                medal = "🥈";

            } else if (index === 2) {

                medal = "🥉";

            } else {

                medal = `#${index + 1}`;
            }


            const rank =
                document.createElement("span");

            rank.className = "rank";

            rank.textContent = medal;


            const player =
                document.createElement("span");

            player.className = "player";

            player.textContent =
                entry.name;


            const scoreElement =
                document.createElement("strong");

            scoreElement.textContent =
                entry.score;


            const accuracy =
                document.createElement("span");

            accuracy.textContent =
                `${entry.accuracy}%`;


            item.appendChild(rank);

            item.appendChild(player);

            item.appendChild(scoreElement);

            item.appendChild(accuracy);


            list.appendChild(item);
        }
    );
}


/* =====================================================
   LEADERBOARD BUTTON
   ===================================================== */

leaderboardBtn.addEventListener(
    "click",
    () => {

        startScreen.classList.add(
            "hidden"
        );

        leaderboardScreen.classList.remove(
            "hidden"
        );

        displayLeaderboard();
    }
);


/* =====================================================
   RESULT LEADERBOARD
   ===================================================== */

resultLeaderboardBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.add(
            "hidden"
        );

        leaderboardScreen.classList.remove(
            "hidden"
        );

        displayLeaderboard();
    }
);


/* =====================================================
   BACK BUTTON
   ===================================================== */

backBtn.addEventListener(
    "click",
    () => {

        leaderboardScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );
    }
);


/* =====================================================
   PLAY AGAIN
   ===================================================== */

playAgainBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );
    }
);


/* =====================================================
   CLEAR LEADERBOARD
   ===================================================== */

clearLeaderboardBtn.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Are you sure you want to clear the leaderboard?"
            );


        if (confirmed) {

            localStorage.removeItem(
                "eduQuestScores"
            );

            displayLeaderboard();

        }
    }
);


/* =====================================================
   CATEGORY NAME
   ===================================================== */

function getCategoryName(category) {

    const names = {

        math: "🔢 Mathematics",

        science: "🔬 Science",

        gk: "🌍 General Knowledge"

    };


    return names[category] || "🌈 Mixed";
}


/* =====================================================
   SHUFFLE ARRAY
   ===================================================== */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }

    return array;
}