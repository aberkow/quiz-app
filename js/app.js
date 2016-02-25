/*
To do -
1 - object w/ array of questions, answer, correct answer, and correct answer text
2 - object to track the current state of the quiz

*/

var questionsArr = [
    {
        questionText: "What is Fragile X Syndrome?",
        answerArray: ["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"],
        correctAnswer: 0,
        //        correctAnswer: "A genetic disorder",
        correctText: "Fragile X Syndrome is a genetic disorder that...",
    },
    { 
        questionText: "What are the approximate odds of being a carrier for Fragile X Syndrome?",
        answerArray: ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"],
        correctAnswer: 2,
        //        correctAnswer: "1 in 500 for males and 1 in 150 for females",
        correctText: "The odds of being a carrier are higer for females because they have two X chromosomes."   
    },
    {
        questionText: "What are the approximate odds of having full mutation Fragile X Syndrome?",
        answerArray: ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"],
        correctAnswer: 3,
        //        correctAnswer: "1 in 4000 for males and 1 in 6000 for females",
        correctText: "Fragile X syndrome is more common in males and can effect them more strongly."
    },
    {
        questionText: "Fragile X Syndrome is the most common known cause of __________",
        answerArray: ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"],
        correctAnswer: 2,
        //        correctAnswer: "Inherited intellectual disability",
        correctText: "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person."
    },
    {
        questionText: "How are people commonly diagnosed with FXS?",
        answerArray: ["Physical exam", "Blood test", "Psychological evaluation", "Family history"],
        correctAnswer: 1,
        //        correctAnswer: "Blood test",
        correctText: "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample."
    }
]

//var compareChoiceToAnswer = function(questionNumber, userChoice) {
//    var questionNumber = 
//}


//var compareChoiceToAnswer = function(questionNumber, userChoice) {
////    var userChoice = //the index number of the user's selection
////    var questionNumber = //the number question they're on
//}

$(document).ready(function() {
        
//    /*just show the intro screen*/
    $('.quiz').hide();
    $('.final').hide();
   
   /*event handler area*/
 
    /*start the game*/
    $('.intro__start').click(function() {
        $('.quiz').show();
        $('.intro').hide();    
    });
    
    //this will change the question text sub 0 for variable
    $('.quiz__question-text').text(questionsArr[0].questionText);
    
    //this will set the text for each possible answer sub 0 for variable
    
    for (var i = 0; i < questionsArr[0].answerArray.length; i++) {
      $('<div class="quiz__answers-item"/>').text(questionsArr[0].answerArray[i]).appendTo('.quiz__answers');
    }
    
    $('.quiz__answers-item').click(function() {
        $('.quiz__answers-item').addClass('selected');
    });
     
    /*function area*/
    

    
});

//var test = {
//    property1: 'string',
//    property2: 2,
//    property3: ['a', 'b', 'c']
//}
//
//var test2 = {
//    property1: 'string',
//    property2: 2,
//    property3: ['a', 'b', 'c'],
//    property4: [
//        {
//           arrayTestProp1: 'blah',
//            arrayTestProp2: 'foo',
//            arrayTestProp3: 'bar'
//        },
//        {
//           arrayTest2Prop1: 'hello',
//            arrayTest2Prop2: 'goodbye',
//            arrayTest2Prop3: 'tomorrow'
//        }
//    ]
//}

//var compareChoiceToAnswer = function(questionNumber, userChoice) {
//    for (var prop in questionsArr[0].answerArray. {
//        console.log(prop);
//    }
//}

//function MyQuestion(questionText, answerArr, correctText, correctAnswer) {
//    this.questionText = questionText;
//    this.answerArr = answerArr;
//    this.correctText = correctText;
//    this.correctAnswer = correctAnswer;
//}
//
//var questionText = ['what is blue?', 'what is red?', 'what is green?'];
//var answerText = [['the sky', 'fire', 'grass'], ['the sky', 'fire', 'grass'], ['the sky', 'fire', 'grass']];
//var correctAnswer = function() {
//    console.log('test');
//}