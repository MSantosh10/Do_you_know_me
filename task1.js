var readline=require("readline-sync")
var user=readline.question("Enter your name ")
console.log("hello ",user)
var know=readline.question("Do you know santosh? ")
score=0
if (know.toUpperCase()==="yes".toUpperCase()){

  function quest(question,answer){
      var Answer=readline.question(question );
      if (Answer.toUpperCase()===answer.toUpperCase()){
          console.log('Right')
          console.log("Your current score ",score+=1)
      }else{
          console.log('Wrong')
          console.log("Your current score ",score)
      }
  };
  var highScore={
    santosh:2,
    shubham:2
  };

  var questi=[{
      question:'Where do he live?  ',
      answer:'Dharamshala'
  },
  {
      question:"who is his favourite superhero?  ",
      answer:'Ironman'
  },
  {
      question:"What he studing?  ",
      answer:'web development'
  }];
  for (var i=0;i<questi.length;i++){
      var queslist=questi[i]
      quest(queslist.question,queslist.answer)
  };
  if (score>highScore.adarsh && score>highScore.abhimanyu){
      console.log("YAY you got highscore "+user+' your score is '+score)
  }else{
      console.log(user,"Your score is "+score)
      console.log("High Scores",highScore)
  }
}else{
  console.log("Bye Bye")
}