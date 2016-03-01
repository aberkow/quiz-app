/*Constructor function to hold all info for each question/answer/info*/

var indexCounter = 0;

//needs: current question, user choice, correct answer, # of correct answers.
var currentQuizState = {};

//an array to hold all the questions
var quiz = [
  new Question("What is Fragile X Syndrome?", ["A genetic disorder.", "A behavioral disorder.", "A physical disability.", "A mental disorder"], 0, "Fragile X Syndrome is a genetic disorder that..."),
  
  new Question("What are the approximate odds of being a carrier for Fragile X Syndrome?", ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], 2, "The odds of being a carrier are higer for females because they have two X chromosomes."),
  
  new Question("What are the approximate odds of having full mutation Fragile X Syndrome?", ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], 3, "Fragile X syndrome is more common in males and can effect them more strongly."),
  
  new Question("Fragile X Syndrome is the most common known cause of __________", ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], 2, "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person."),
  
  new Question("How are people commonly diagnosed with FXS?", ["Physical exam", "Blood test", "Psychological evaluation", "Family history"], 1, "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample.")
];

//constructor function to make questions/answers
function Question(question, answerArr, correctAnswer, infoText) {
    this.question = question;
    this.answerArr = answerArr;
    this.correctAnswer = answerArr[correctAnswer];
    this.infoText = infoText;
}

$(document).ready(function() {
    /*just show the intro screen*/
    $('.quiz').hide();
    $('.final').hide();
   
   /*event handler area*/
 
    /*start the game and get the first question/answer set ready*/
    $('.intro__start').click(function() {
      //startQuiz();  
      $('.quiz').show();
      $('.intro').hide();   
      questionCounter();
      displayQuestion();
      manageAnswers();
      //compareAnswers();
    });
  
  /*cycle back to the first question*/  
  $('.restart').click(function() {
    $('.final').hide();
    $('.intro').show();
  }); 
  
  $('.confirm__button').click(function() {
    //ternary operator: check text of button and toggle
    $(this).text() === 'Check your answer' ? $(this).text('Continue') : $(this).text('Check your answer');
    
    //only works on the second click???
    if ($('.quiz__answers-item').hasClass('selected') == true) {
     $('.confirm__button').on('click', function() {
       debugger;
       compareAnswers();
     }); 
    } else {
      questionCounter();
    }
  });

    /*function area*/  
  function startQuiz() {
//    currentQuizState.question = null;
//    currentQuizState.userChoice = null;
//    //currentQuizState.answers = null;
//    currentQuizState.correctChoice = quiz[quizIndexCounter].correctAnswer;
//    currentQuizState.numberCorrect = 0
  } 
  
  function questionCounter() {
    //either increment the counter or hide the quiz and show last screen/reset the counter.
    if (indexCounter < quiz.length - 1) {
      currentQuizState.question = quiz[indexCounter].question;
      currentQuizState.answers = quiz[indexCounter].answerArr;
      currentQuizState.correctChoice = quiz[indexCounter].correctAnswer;
      indexCounter++; 
    } //add an else statement here to cycle back to the end.
  }
  
    //clear the choices from the previous question.
    //set the text of the next question
    //set the answers each in its own <div>
  function displayQuestion() {
    //set the text of the question.
    $('.quiz__question-text').text(currentQuizState.question);
   } 
  
  function manageAnswers() {
    //set the text of the possible answer choices
    $('.quiz__answers').empty;
    for (var i = 0; i < currentQuizState.answers.length; i++) {
      $('<div class="quiz__answers-item"/>')
        .text(currentQuizState.answers[i])
        .appendTo($('.quiz__answers'))
        .on('click', function(evt) {
          $('.quiz__answers-item').removeClass('selected');
          $(this).addClass('selected');
          currentQuizState.userChoice = $(this).text();
      });
    }
  }
  
  
});

function compareAnswers() {
    //compare the correct answer to the user's choice.
    //debugger;
    if (currentQuizState.userChoice.toString() == currentQuizState.correctChoice.toString()) {
      alert('Yay');
    }else{
      alert('Oops');
    }
  }





//      displayQuestion(currentQuizState.question);
//      //createAnswerChoices(quiz[quizIndexCounter]);
//      questionCounter(); 

//var currentQuestion = quiz[quizIndexCounter];
//    currentQuestion.userAnswer
//    displayQuestion(currentQuestion);
//    questionCounter();

//    if (quizIndexCounter < quiz.length - 1) { 
//      quizIndexCounter++;
//      currentQuizState.question = quizIndexCounter;
//      } else {
//      $('.quiz').hide();
//      $('.final').show();
//      quizIndexCounter = 0;

 //$('.quiz__answers').empty();
//    $('.quiz__question-text').text(quiz[quizIndexCounter].question);
//    //$('.quiz__question-text').text(question.question);
//    for (var i = 0; i < quiz[quizIndexCounter].answerArr.length; i++) { 
//      $('<div class="quiz__answers-item"/>').text(question.answerArr[i])
//        .appendTo('.quiz__answers')
//        .on('click', function(evt) {
//          $('.quiz__answers-item').removeClass('selected');
//          $(this).addClass('selected');
//          quiz[quizIndexCounter].userAnswer = question.answerArr[i];
//      });

//  function createAnswerChoices(question) {
//    if (answerChoiceItem < answerChoices.length - 1) {
//      answerChoices.push($('.quiz__answers-item').text(question.answerArr[i]));
//      answerChoiceItem++;
//    }
//  } 


