function loadQuestions() {
    // create an array of question objects
    // Initialise variables
    var questions = [];

    // create array and objects
    questions[0] = { "question": 0, "text": "Get ready for your quiz. Please write down the answers before we enter them.", "answer": 0, "answertext": "" };
    questions[1] = { "question": 1, "text": "Approximately how many people attended the soccer match between Uruguay and Brazil during the 1950 FIFA World Cup tournament?", "answer": 199800, "answertext": "This match at the Macarena Municipal Stadium in Rio De Janeiro set a record for a soccer match attendance." };
    questions[2] = { "question": 2, "text": "Including the antenna on the top, how many metres tall is the Eiffel Tower?", "answer": 324, "answertext": "It is 324 metres tall (including antennas) and weighs 10,100 tonnes." };
    questions[3] = { "question": 3, "text": "How many words are there in Herman Melville’s book ‘Moby-Dick’?", "answer": 212758, "answertext": "It took Melville 18 months to write the book, drawn on his exeriences as a comon sailor from 1841 to 1844." };
    questions[4] = { "question": 4, "text": "How many miles, as the crow flies, is it from London to New York?", "answer": 3470, "answertext": "" };
    questions[5] = { "question": 5, "text": "How many miles long is the River Thames?", "answer": 215, "answertext": "" };
    questions[6] = { "question": 6, "text": "From launch to splashdown, what was the duration in minutes of the Apollo 11 mission?", "answer": 4699, "answertext": "The 363-foot-tall Apollo 11 space vehicle was launched from Pad A, Launch Complex 39, Kennedy Space Center, at 8:32 a.m. EST, July 16, 1969." };
    questions[7] = { "question": 7, "text": "How many times does the word ‘blood’ appear in Shakespeare’s ‘Macbeth’?", "answer": 42, "answertext": "Shakespeare mentions the word 'blood' 42 times in Macbeth. Ironically, the word 'fear' also is used the same amount." };
    questions[8] = { "question": 8, "text": "How many metres high (above sea level) is Mount Snowdon?", "answer": 1085, "answertext": "In the café at the summit, you can drink a beer called '1085'. It's very refreshing." };
    questions[9] = { "question": 9, "text": "According to the British Board of Trade report on the disaster, how many people survived the sinking of RMS Titanic?", "answer": 710, "answertext": "The death toll has been put at between 1,490 and 1,635 people. Inaccuracy was caused by some who cancelled their trip at the last minute and several passengers travelled under aliases and were double-counted on the casualty lists." };
    questions[10] = { "question": 10, "text": "According to World Population Review, how many people live in the City of Liverpool in 2020?", "answer": 901708, "answertext": "In 1950, the population was estimated to be 1,382,309 - by 2000 it had dropped to 852, 521. Since then, the population has been increasing and is expected to continue to do so." };
    questions[11] = { "question": 11, "text": "In which year did the ‘U-Bahn’ (The Berlin underground system) open, and Cuba gained independence from the United States?", "answer": 1902, "answertext": "Edward VII was crowned on August 9th, following the death of his mother - who blamed him for the death of his father." };
    questions[12] = { "question": 12, "text": "In which year did Sir Winston Churchill die?", "answer": 1965, "answertext": "Sir Winston Churchill died on 24 January 1965, aged 90. His was the most recent state funeral in the UK, lasting for 4 days." };
    questions[13] = { "question": 13, "text": "In which year did Blackpool Tower open for the first time?", "answer": 1894, "answertext": "Blackpool Tower was opened to the public on 14 May 1894. When it opened, Blackpool Tower was the tallest man made structure in the British Empire." };
    questions[14] = { "question": 14, "text": "In which year was Halley's Comet last closest to Earth?", "answer": 1986, "answertext": "Halley is the only known short-period comet that is regularly visible to the naked eye from Earth, and is the only one that can appear twice in a human lifetime. Halley will next appear in mid-2061." };
    questions[15] = { "question": 15, "text": "Name the year of the death of Queen Elizabeth I?", "answer": 1603, "answertext": "Elizabeth I (7 September 1533 – 24 March 1603) was Queen of England and Ireland until her death. Sometimes called the Virgin Queen, Gloriana or Good Queen Bess, Elizabeth was the last of the five Tudor monarchs." };

    return questions;
}

function changeQuestion(direction) {
    // Clear current answers and display next question
    // Initialise Variables
    var currentQuestion = 0,
        numberOfQuestions = 0,
        questions = [];

    direction = Number(direction);
    // Clear and hide previous question details, and reset the text colour
    document.getElementById('answerText').hidden = true;
    document.getElementById('answerDescription').hidden = true;
    document.getElementById('group1team1answer').value = "";
    document.getElementById('group1team2answer').value = "";
    document.getElementById('group2team1answer').value = "";
    document.getElementById('group2team2answer').value = "";
    document.getElementById('group3team1answer').value = "";
    document.getElementById('group3team2answer').value = "";
    document.getElementById('group1Answer').value = "";
    document.getElementById('group2Answer').value = "";
    document.getElementById('group3Answer').value = "";
    document.getElementById('group1Answer').style.color = "#000000";
    document.getElementById('group2Answer').style.color = "#000000";
    document.getElementById('group3Answer').style.color = "#000000";

    // Get questions
    currentQuestion = Number(document.getElementById('questionNumber').value);
    questions = loadQuestions();
    numberOfQuestions = Number(questions.length) - 1;

    // Change current Question if there is any more questions
    if (direction < Number(1)) {
        if (currentQuestion > 0) {
            currentQuestion--;
            document.getElementById('questionNumber').value = currentQuestion;
            document.getElementById('questionText').innerText = questions[currentQuestion].text;
            document.getElementById('answerText').innerText = questions[currentQuestion].answer;
            document.getElementById('answerDescription').innerText = questions[currentQuestion].answertext;
        }
    } else {
        if (currentQuestion < numberOfQuestions) {
            currentQuestion++;
            document.getElementById('questionNumber').value = currentQuestion;
            document.getElementById('questionText').innerText = questions[currentQuestion].text;
            document.getElementById('answerText').innerText = questions[currentQuestion].answer;
            document.getElementById('answerDescription').innerText = questions[currentQuestion].answertext;
        }
    }

    // Disable Answer Button
    document.getElementById('answer').disabled = true;
}

function nextQuestion() {
    // Clear current answers and display next question
    // Initialise Variables
    var currentQuestion = 0,
        numberOfQuestions = 0,
        questions = [];

    // Clear and hide previous question details, and reset the text colour
    document.getElementById('answerText').hidden = true;
    document.getElementById('answerDescription').hidden = true;
    document.getElementById('group1team1answer').value = "";
    document.getElementById('group1team2answer').value = "";
    document.getElementById('group2team1answer').value = "";
    document.getElementById('group2team2answer').value = "";
    document.getElementById('group3team1answer').value = "";
    document.getElementById('group3team2answer').value = "";
    document.getElementById('group1Answer').value = "";
    document.getElementById('group2Answer').value = "";
    document.getElementById('group3Answer').value = "";
    document.getElementById('group1Answer').style.color = "#000000";
    document.getElementById('group2Answer').style.color = "#000000";
    document.getElementById('group3Answer').style.color = "#000000";

    // Get questions
    currentQuestion = Number(document.getElementById('questionNumber').value);
    questions = loadQuestions();
    numberOfQuestions = Number(questions.length) - 1;

    // Increase current Question if there is any more questions
    if (currentQuestion < numberOfQuestions) {
        currentQuestion++;
        document.getElementById('questionNumber').value = currentQuestion;
        document.getElementById('questionText').innerText = questions[currentQuestion].text;
        document.getElementById('answerText').innerText = questions[currentQuestion].answer;
        document.getElementById('answerDescription').innerText = questions[currentQuestion].answertext;
    }

    // Disable Answer Button
    document.getElementById('answer').disabled = true;
}

function showTeamNames() {
    // Show Team Details Jumbo
    document.getElementById('teams').hidden = false;
}

function applyTeamNames() {
    // Update Group and Team Details
    document.getElementById('group1').innerText = document.getElementById('newGroup1Name').value;
    document.getElementById('group1AnswerLabel').innerText = document.getElementById('newGroup1Name').value;
    document.getElementById('group2').innerText = document.getElementById('newGroup2Name').value;
    document.getElementById('group2AnswerLabel').innerText = document.getElementById('newGroup2Name').value;
    document.getElementById('group3').innerText = document.getElementById('newGroup3Name').value;
    document.getElementById('group3AnswerLabel').innerText = document.getElementById('newGroup3Name').value;
    document.getElementById('group1team1').innerText = document.getElementById('newGroup1Team1Name').value;
    document.getElementById('group1team2').innerText = document.getElementById('newGroup1Team2Name').value;
    document.getElementById('group2team1').innerText = document.getElementById('newGroup2Team1Name').value;
    document.getElementById('group2team2').innerText = document.getElementById('newGroup2Team2Name').value;
    document.getElementById('group3team1').innerText = document.getElementById('newGroup3Team1Name').value;
    document.getElementById('group3team2').innerText = document.getElementById('newGroup3Team2Name').value;
    // Hide Team Details Jumbo
    document.getElementById('teams').hidden = true;
}

function calculateAverages() {
    // Calculate team averages and write answers
    // Initialise variabes
    var g1t1 = Number(document.getElementById('group1team1answer').value),
        g1t2 = Number(document.getElementById('group1team2answer').value),
        g2t1 = Number(document.getElementById('group2team1answer').value),
        g2t2 = Number(document.getElementById('group2team2answer').value),
        g3t1 = Number(document.getElementById('group3team1answer').value),
        g3t2 = Number(document.getElementById('group3team2answer').value),
        g1 = 0,
        g2 = 0,
        g3 = 0;

    // Calculate answers
    g1 = (g1t1 + g1t2) / 2;
    g2 = (g2t1 + g2t2) / 2;
    g3 = (g3t1 + g3t2) / 2;
    // Output answers
    document.getElementById('group1Answer').value = g1;
    document.getElementById('group2Answer').value = g2;
    document.getElementById('group3Answer').value = g3;
    // Enable Answer Button
    document.getElementById('answer').disabled = false;
}

function displayAnswer() {
    // Display the answer and who gets the points
    // Initialise variables
    var g1 = Number(document.getElementById('group1Answer').value),
        g2 = Number(document.getElementById('group2Answer').value),
        g3 = Number(document.getElementById('group3Answer').value),
        answer = Number(document.getElementById('answerText').innerText),
        answers = [];

    // Check Results
    g1 = Math.abs(answer - g1);
    g2 = Math.abs(answer - g2);
    g3 = Math.abs(answer - g3);
    answers = [g1, g2, g3];

    // Sort Answers
    answers = sortAnswers(answers);
    if (answers[0] === g1) {
        document.getElementById('group1Answer').style.color = "#FF0000"
    }
    if (answers[0] === g2) {
        document.getElementById('group2Answer').style.color = "#FF0000"
    }
    if (answers[0] === g3) {
        document.getElementById('group3Answer').style.color = "#FF0000"
    }

    // Display answer
    document.getElementById('answerText').hidden = false;
    document.getElementById('answerDescription').hidden = false;
}

function sortAnswers(answers) {
    answers.sort(function (a, b) { return a - b });
    return answers;
}