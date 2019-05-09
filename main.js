
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
                document.querySelector('ul').appendChild(node); 

                addOptions();
            }

            function addText() {
                return `<p>${question.title} : ${question.content}</p>`
            }

            function addLabel() {      
                
                return  `<label for="answer-select">Choose an anser:</label>`
                 
            }

            function addOpenSelect() {
                return `<select id="pet-select">`
            }

            function addOptions() {

                var options = "";

                question.options.forEach(option => {
                    console.log(option)
                })

                {/* <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option> */}
            }
          
            addQuiz();
      

          
        })


    }
}

var quiz = new Quiz('myQuiz');
console.log(quiz)

quiz.getQuestions().then(data => {
    quiz.renderQuestions(data);
})
