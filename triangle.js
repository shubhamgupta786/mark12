const sideoftriangle=document.querySelectorAll('.side');
const submitbtn=document.querySelector('#btn');
const op=document.querySelector('#pp');
submitbtn.addEventListener('click', fn);
function fn(){
const area=Area( Number(sideoftriangle[0].value),
Number(sideoftriangle[1].value)  ); 

op.innerText= "Area of Triangle is " +area; 
}


function Area( width,height  ){

    
let answer= (width*height)/2;


return answer;

}








