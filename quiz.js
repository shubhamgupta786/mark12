const quizForm=document.querySelector('.quiz-form');
const submitAnswerBtn=document.querySelector('#btn');
const op=document.querySelector('#output');
const correctanswer=['90','right angle'];

function calculatescore(){



  let score=0;

  const FormResult=new FormData(quizForm);
  for(let value of FormResult.values()){
if(value===correctanswer[0] ||value===correctanswer[1])score++;


  }
  op.innerText=`Your Score is ${score}`; 


}
submitAnswerBtn.addEventListener('click',calculatescore);


