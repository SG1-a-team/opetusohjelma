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
      question: "Paljon on ?",
      answers: {
        a: '',
        b: '',
        c: ''
      },
      correctAnswer: 'c'
    }
    ,
    {
      question: "Kuinka paljon on ?",
      answers: {
        a: '',
        b: '',
        c: ''
      },
      correctAnswer: 'c'
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
      
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }

    function Clear()
    {
        clearContentButton

    }
    
  }