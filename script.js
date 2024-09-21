let streak = 0;
const streakElement = document.getElementById('streak');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const motivationBtn = document.getElementById('motivationBtn');
const motivationText = document.getElementById('motivationText');
const quoteContainer = document.getElementById('quoteContainer');

const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it."
];

incrementBtn.addEventListener('click', () => {
    if (streak < 66) {
        streak++;
        updateStreak();
        motivationText.innerText = getMotivationalMessage(streak);
        incrementBtn.innerText = streak;
    } else {
        motivationText.innerText = "Congratulations! You've become a better person!";
    }
});

resetBtn.addEventListener('click', () => {
    streak = 0;
    updateStreak();
    motivationText.innerText = "It's okay! Restart and try again!";
    incrementBtn.innerText = streak;
});

motivationBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.innerText = randomQuote;
});

function updateStreak() {
    streakElement.innerText = `Current Streak: ${streak} days`;
}

function getMotivationalMessage(streak) {
    if (streak < 7) {
        return "Keep going! Every day matters.";
    } else if (streak < 30) {
        return "You’re building a solid habit!";
    } else if (streak < 66) {
        return "Amazing progress! Keep pushing!";
    } else {
        return "Congratulations! You've become a better person!";
    }
}
