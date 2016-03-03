/*Constructor function to hold all info for each question/answer/info*/

var indexCounter = 0;

//store the current state of the quiz as it goes along.
var currentQuizState = {
  numberCorrect: 0
};

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
    startQuiz();
  }); 
  
  $('.confirm__button').click(function() {
      if (currentQuizState.userChoice == undefined) {
        alert('Please choose an answer.');
      }
    //else if(?) userChoice != undefined && 'Check your answer'...?
      else if ($(this).text() == 'Check your answer') {
      //compare the answers, set the info text, switch the button text
        compareAnswers();
        $(this).text('Continue');
      } else {
      //clear the info text, go to the next question, and reset the button text.
        currentQuizState.userChoice = undefined;
        $('.result__text, .result__type').text('');
        questionCounter();
        displayQuestion();
        manageAnswers();

        $(this).text('Check your answer');
      }  
  });

    /*function area*/  
  function startQuiz() {
    indexCounter = 0;
    currentQuizState.numberCorrect = 0;
    currentQuizState.question = null;
    currentQuizState.userChoice = null;
    currentQuizState.answers = null;
    currentQuizState.correctChoice = null;
    currentQuizState.infoText = null;
  } 
  
  function questionCounter() {
    //either increment the counter or hide the quiz and show last screen/reset the counter.
    if (indexCounter < quiz.length - 1) {
      currentQuizState.question = quiz[indexCounter].question;
      currentQuizState.answers = quiz[indexCounter].answerArr;
      currentQuizState.infoText = quiz[indexCounter].infoText;
      currentQuizState.correctChoice = quiz[indexCounter].correctAnswer.toString();
      indexCounter++; 
    } else {
      //show the final screen and give feedback
      $('.quiz').hide();
      $('.final').show();
      finalFeedback();
    }
  }
    
  function displayQuestion() {
    //set the text of the question.
    $('.quiz__question-text').text(currentQuizState.question);
   } 
  
  function manageAnswers() {
    //clear any previous answer sets and set next answer choices
    $('.quiz__answers').empty();
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

//find a way to make userChoice undefined w/o breaking things....
function compareAnswers() {
  //compare the correct answer to the user's choice.
  if (currentQuizState.userChoice == currentQuizState.correctChoice) {
    $('.result__type').text('Correct!');
    currentQuizState.numberCorrect++;
    console.log('Yay');
  } else {
    $('.result__type').text('Incorrect');
    console.log('Oops');
  }
  $('.result__text').text(currentQuizState.infoText);
}

function finalFeedback() {
  //Give different feedback based on performance.
  var achievment;
  if (currentQuizState.numberCorrect == quiz.length) {
    achievment = 'Amazing!';
  } else if (currentQuizState.numberCorrect == quiz.length - 1) {
    achievment = 'Good job!';
  } else if (currentQuizState.numberCorrect == quiz.length - 2) {
    achievment = 'Not bad!';
  } else {
    achievment = 'Better luck next time!'
  }
  //set the final text for the quiz. # correct.
  $('.final__tally-text').text(achievment + ' You got ' + currentQuizState.numberCorrect + ' of ' + quiz.length + ' correct.');  
}
  
