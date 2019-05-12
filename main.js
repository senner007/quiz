
// const fetch = require('node-fetch');

class Quiz {
    constructor (name) {
        this.name = name;
    }

    getQuestions () {
        return fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json').then(res => res.json())
    }

    renderQuestions (questionsArray) {
        questionsArray.forEach(question => {

            function addQuiz() {
                var node = document.createElement("LI");               
                node.innerHTML = addText();
                node.innerHTML += addLabel();
                node.innerHTML += addOptions();
                document.querySelector('ul').appendChild(node); 
            }

            function addText() {
                return `<p>${question.title} : ${question.content}</p>`
            }

            function addLabel() {          
                return  `<label for="answer-select">Choose an answer:</label>`   
            }

            function addOptions() {

                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "";

                question.options.forEach(option => {
                    options += `<option data-is-answer="${option.correct}" value="${option.content}">${option.content.replace(/ *\([^)]*\) */g, "")}</option>`
                })

                return openSelect + options + closeSelect;
            }

          
            addQuiz();
     
        })

    }
    calculateScore() {
        var options = document.querySelectorAll('[data-is-answer="true"]');

        var score = 0;
        options.forEach(option => {
            score = option.selected ? score + 1 : score
        })
        
        return score
     
    }
  
}

var quiz = new Quiz('myQuiz');
console.log(quiz)

quiz.getQuestions().then(data => {
    quiz.renderQuestions(data);
    quiz.calculateScore();
})

document.querySelector('button').addEventListener('click', function () {
   alert('Your score is ' + quiz.calculateScore())
})
