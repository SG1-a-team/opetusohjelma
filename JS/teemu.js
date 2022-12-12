//  tässä koodissa on käytettynyt apuna seuraavaa sivustao https://simplestepscode.com/javascript-quiz-tutorial/
//Here we have the navbar JS. Separate functions for all bounce hover effects
//since we did not have the means to make the classlist adds/removes with shorter code

let link1 = document.getElementById('link1')
let home = document.getElementById('home');

function animation() {
    home.classList.add('fa-bounce');
}

function no_animation() {
    home.classList.remove('fa-bounce');
}

link1.addEventListener('mouseenter', animation);
link1.addEventListener('mouseleave', no_animation);

 //------//
let link2 = document.getElementById('link2')
let otter = document.getElementById('otter');

function animation2() {
    otter.classList.add('fa-bounce');
}

function no_animation2() {
    otter.classList.remove('fa-bounce');
}

link2.addEventListener('mouseenter', animation2);
link2.addEventListener('mouseleave', no_animation2);

//-----//

let link3 = document.getElementById('link3')
let kiwi = document.getElementById('kiwi');

function animation3() {
    kiwi.classList.add('fa-bounce');
}

function no_animation3() {
    kiwi.classList.remove('fa-bounce');
}

link3.addEventListener('mouseenter', animation3);
link3.addEventListener('mouseleave', no_animation3);

//-----//

let link4 = document.getElementById('link4')
let crow = document.getElementById('crow');

function animation4() {
    crow.classList.add('fa-bounce');
}

function no_animation4() {
    crow.classList.remove('fa-bounce');
}

link4.addEventListener('mouseenter', animation4);
link4.addEventListener('mouseleave', no_animation4);

//-----//

let link5 = document.getElementById('link5')
let frog = document.getElementById('frog');

function animation5() {
    frog.classList.add('fa-bounce');
}

function no_animation5() {
    frog.classList.remove('fa-bounce');
}

link5.addEventListener('mouseenter', animation5);
link5.addEventListener('mouseleave', no_animation5);

//-----//

let link6 = document.getElementById('link6')
let dog = document.getElementById('dog');

function animation6() {
    dog.classList.add('fa-bounce');
}

function no_animation6() {
    dog.classList.remove('fa-bounce');
}

link6.addEventListener('mouseenter', animation6);
link6.addEventListener('mouseleave', no_animation6);

//-----//

let link7 = document.getElementById('link7')
let bulb = document.getElementById('bulb');

function animation7() {
    bulb.classList.add('fa-bounce');
}

function no_animation7() {
    bulb.classList.remove('fa-bounce');
}

link7.addEventListener('mouseenter', animation7);
link7.addEventListener('mouseleave', no_animation7);

//Navbar JS ends here

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" id="joku" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
               
                
                
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
                
                
                
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ". Oikeat vastaukset olivat c ,a ,b ,b ,c";
        
        
    
         
    }
	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){

		showResults(questions, quizContainer, resultsContainer);
        submitButton.disabled = true
	}
}
var myQuestions = [
	{
		question: "Missä Pandat nukkuvat?",
		answers: {
			a: 'Kuussa ',
			b: 'Sängyssä ',
			c: 'Missä vaan '
		},
		correctAnswer: 'c'
	},
    {
		question: "Miten seeprat juttelevat toisilleen?",
		answers: {
			a: 'Korvia liikuttelemalla ',
			b: 'Puhumalla ',
			c: 'Murjottamallla '
		},
		correctAnswer: 'a'
	},
    {
		question: "Kuinka monta tuntia leijonauros nukkuu päivässä?",
		answers: {
			a: 'Liika monta ',
			b: '20 tuntia ',
			c: 'Niin monta kun naarasleijona antaa '
		},
		correctAnswer: 'b'
	},
    {
		question: "Minkävärinen on Elefantti?",
		answers: {
			a: 'Vihreä ',
			b: 'Harmaa ',
			c: 'Violetti '
		},
		correctAnswer: 'b'
	},
	{
		question: "Mitä tulee kun yhdistää lohen ja käärmeen?",
		answers: {
			a: 'Hassu soppa ',
			b: 'Jonkinsortin avaruusolio ',
			c: 'Lohikäärme '
		},
		correctAnswer: 'c'
	}
    
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
