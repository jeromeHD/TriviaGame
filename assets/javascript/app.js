$(document).ready(function() {
  //Variables

  var userGuess;
  var number = 30;
  var intervalId;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var unAnswer = 0;

  //Timer
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    number--;
    $("#timer").html("<h3>" + number + "</h3>");

    if (number === 0) {
      stop();
      alert("Times Up!");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  run();

  //Quesions and answers array
  var triviaQuestion = [
    {
      question: "What is the airspeed velocity of an unladen european swallow?",
      choices: ["30mph", "16mph", "12mph", "24mph"],
      validAnswer: 3
    },
    {
      question:
        "How many licks does it take to get to the center of a tootsie pop?",
      choices: ["267 licks", "589 licks", "364 licks", "879 licks"],
      validAnswer: 2
    },
    {
      question: "What is a group of unicorns known as?",
      choices: ["A murder", "A blessing", "A army", "A gaggle"],
      validAnswer: 1
    },
    {
      question:
        "What is the tiny plastic covering of the tip of a shoelace called?",
      choices: ["An aglet", "A knot", "A plastic cover", "A shoelace"],
      validAnswer: 0
    }
  ];

  document.write(triviaQuestion);
});
