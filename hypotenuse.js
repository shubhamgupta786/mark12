const sides=document.querySelectorAll('.side-input');
const op=document.querySelector('#output');
const submitbtn=document.querySelector('#submit-btn');


function calculateHypotenuse(){

const sum=sumOfSquare(Number(sides[0].value),Number(sides[1].value));
const hypotenuse=Math.sqrt(sum);
op.innerText= " Length of Hypotenuse is:"+hypotenuse;
//console.log(sum);


}



function sumOfSquare(a,b){

return a*a+b*b;

}

submitbtn.addEventListener('click',calculateHypotenuse);