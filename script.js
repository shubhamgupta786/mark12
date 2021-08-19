const input=document.querySelectorAll('.angle-input');
// now we have array of angles like angle[0],angle[1];
const btn=document.querySelector('#is-triangle');
const op=document.querySelector('#output');
btn.addEventListener('click',isTriangle);
function calculatesumofAngles(angle1,angle2,angle3){
  const sum=angle1+angle2+angle3;

return sum;


}

function isTriangle(){
const sumofAngles= calculatesumofAngles(Number(input[0].value) ,Number(input[1].value),Number(input[2].value));
if(sumofAngles===180){
op.innerText="Hurray! Triangle is made";}
else op.innerText="Not a triangle";


}







