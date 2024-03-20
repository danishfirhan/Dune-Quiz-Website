document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What is the name of the sacred text that forms the basis of the Fremen religion?",
            answers: [
                { text: "The Orange Catholic Bible", correct: true },
                { text: "The Azhar Book", correct: false },
                { text: "The O.C. Scripture", correct: false },
                { text: "The Orange Catholic Catechism", correct: false }
            ],
        }, 
        {
            question: "Which House is responsible for the betrayal and destruction of House Atreides on Arrakis?",
            answers: [
                { text: "House Corrino", correct: false },
                { text: "House Richese", correct: false },
                { text: "House Harkonnen", correct: true },
                { text: "House Vernius", correct: false }
                ]
        },
        {
            question: "What is the name of the desert mouse adapted to Arrakis' harsh environment, often used as a source of water?",
            answers: [
                { text: "Sandpiper", correct: false },
                { text: "Desert Hare", correct: false },
                { text: "Sand Trout", correct: true },
                { text: "Muad'Dib", correct: false }
                ]
        },
        {
            question: "Which character becomes the God Emperor in the later books of the Dune series?",
            answers: [
                { text: "Paul Atreides", correct: false },
                { text: "Leto Atreides II", correct: true },
                { text: "Duncan Idaho", correct: false },
                { text: "Gurney Halleck", correct: false }
                ]
        },
        {
            question: "Who is the Emperor of the Known Universe during the events of the first Dune novel? the name of the desert mouse adapted to Arrakis' harsh environment, often used as a source of water?",
            answers: [
                { text: "Shaddam Corrino IV", correct: true },
                { text: "Elrood IX", correct: false },
                { text: "Padishah Emperor Leto Atreides I", correct: false },
                { text: "House Vernius", correct: false }
                ]
        },
        {
            question: "Who is the daughter of Duke Leto Atreides and Lady Jessica, and later becomes a prominent figure in the Dune universe?",
            answers: [
                { text: "Chani", correct: false },
                { text: "Ghanima", correct: false },
                { text: "Alia", correct: true },
                { text: "Irulan", correct: false }
                ]
        },
        {
            question: "What is the name of the special training undergone by the Bene Gesserit to control their bodies and minds completely?",
            answers: [
                { text: "Prana-bindu", correct: true },
                { text: "Litany Against Fear", correct: false },
                { text: "Agony Booth", correct: false },
                { text: "Weirding Way", correct: false }
                ]
        },
        {
            question: "What is the name of the giant sandworms native to the desert planet of Arrakis?",
            answers: [
                { text: "Muad'Dib", correct: false },
                { text: "Shai-Hulud", correct: true },
                { text: "Sandtrout", correct: false },
                { text: "Sandrider", correct: false }
                ]
        },
        {
            question: "Which character is known as the 'Voice' due to their ability to control others through sound and body language?",
            answers: [
                { text: "Thufir Hawat", correct: false },
                { text: "Piter De Vries", correct: true },
                { text: "Reverend Mother Gaius Helen Mohiam", correct: false },
                { text: "Wellington Yueh", correct: false }
                ]
        },
        {
            question: "What is the name of the organization responsible for the control and distribution of the Spice Melange in the Imperium?",
            answers: [
                { text: "CHOAM", correct: false },
                { text: "Spacing Guild", correct: true },
                { text: "Bene Gesserit", correct: false },
                { text: "Landsraad", correct: false }
                ]
        }
    ];
    
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-button");
    const nextButton = document.getElementById('next-btn');
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerHTML = answer.text;
            button.classList.add('btn');
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButton.appendChild(button);
        }) ;
    }
    
    function resetState(){
        nextButton.classList.add('hide');
        while(answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }
    
    function selectAnswer(e){
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";
        if(isCorrect){
            selectedButton.classList.add('correct');
            score++;
        }
       else{
            selectedButton.classList.add('incorrect');
        }
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
    
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    
    nextButton.addEventListener('click', () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    startQuiz();
    });