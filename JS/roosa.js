let myQuestions = [
  {
    question: "Kuinka paljon on 11 + 4?",
    answers: {
      a: '15',
      b: '18',
      c: '114'
    },
    correctAnswer: 'a'
  },
  {
    question: "Kuinka paljon on 5 * 4?",
    answers: {
      a: '54',
      b: '20',
      c: '40'
    },
    correctAnswer: 'b'
  },
  {
    question: "Kuinka paljon on 30 / 3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c'
  },
  {
    question: "Jos Pekko saa lahjaksi 8 luuta ja syö niistä 3, kuinka monta luuta jää jäljelle?",
    answers: {
      a: '11',
      b: '5',
      c: '3'
    },
    correctAnswer: 'b'
  }
  ,
  {
    question: "Entäpä kun Pekolla on yksi 20kg ruokasäkki. Paljonko ruokaa on 10 säkissä?",
    answers: {
      a: '200',
      b: '120',
      c: '150'
    },
    correctAnswer: 'a'
  }
];

const correct1 = "https://i.imgur.com/5IaY11U.png";


let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let clearContentButton = document.getElementById('restart');




generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    let output = [];
    let answers;

    // for each question...
    for(let i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
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
    let answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;
    
    // for each question...
    for(let i=0; i<questions.length; i++){

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
    resultsContainer.innerHTML = numCorrect + ' oikein ' + questions.length;
    
    // vastauksia pisteiden perusteella
    if(numCorrect == 5){
        document.getElementById('palaute').innerHTML = 'Pekko on erittäin tyytyväinen, sait täydet pisteet!';
      }
      else if(numCorrect == 4){
        document.getElementById('palaute').innerHTML = 'Pekko melko tyytyväinen, sait melkein kaikki oikein!';
      }
      else if(numCorrect == 3){
        document.getElementById('palaute').innerHTML = 'Pekko on tyytyväinen, mutta vielä voisi mennä paremmin.';
      }
      else if(numCorrect == 2){
        document.getElementById('palaute').innerHTML = 'Pekko käskee harjoitella lisää, ja sitten vastaamaan uudestaan!';
      }
      else if(numCorrect == 1){
        document.getElementById('palaute').innerHTML = 'Pekko ei ole tyytyväinen, koita uudelleen!';
      }
      else {
        document.getElementById('palaute').innerHTML = 'Pekko huomaa että et ole vastannut mihinkään oikein.';
      }
     
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
  
}