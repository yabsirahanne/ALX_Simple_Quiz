// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Select Feedback Element
    const feedback = document.getElementById('feedback');

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);