import { insertData } from './helper.js';

document.querySelector('#sumbitButton').addEventListener('click',(e)=>{
  e.preventDefault();
  const { email, msg } = Object.fromEntries(new FormData(document.querySelector('#FORM')));
  let alertText = '*' ;
  let s = msg;
  s = s.replace(/(^\s*)|(\s*$)/gi,"");
  s = s.replace(/[ ]{2,}/gi," ");
  s = s.replace(/\n /,"\n");
  let emailValidationRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  if( !(s.split(' ').length <= 10) && (emailValidationRegex.test(email)) ){
    insertData(email,msg);
    document.querySelector('#email').innerText = "";
    document.querySelector('#msg').innerText = "";
  } else {
    if( (s.split(' ').length <= 10) ){
      document.querySelector('#alertMsg').innerText =  alertText;
    } else {
      document.querySelector('#alertMsg').innerText = '';
    }
    if ( !(emailValidationRegex.test(email)) ) {
      document.querySelector('#alertEmail').innerText = alertText;
    } else {
      document.querySelector('#alertEmail').innerText = '';
    }
  }
},false);

let ale = document.querySelector('#checkMsg').animate([
  {
    opacity:'0',
    transform: 'translateY(-20px)'
  },{
    opacity:'1',
    transform:'translateY(0px)'
  }
],
{
  fill:'forwards',
  duration:300,
  easing:'cubic-bezier(0.785, 0.135, 0.15, 0.86)'
});

let words; // Array

let isSpaced = true;

let nextTransition = false;

document.querySelector('#msg').addEventListener('input',(e)=>{

  e.preventDefault();
  console.log(e);

  words = e.target.value.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(' ');

  // Forward working solution 1
  
  
  if ( words[0] === "" ) {
    document.querySelector('#checkMsg').innerText = "";
  } else if ( words.length <= 10 ) {
    if(document.querySelector('#checkMsg').classList.contains('text-green-500')){
      document.querySelector('#checkMsg').classList.replace('text-green-500','text-rose-500');
      document.querySelector('#checkMsg').classList.replace('opacity-0','opacity-100');
      document.querySelector('#correctMsg').classList.replace('opacity-0','opacity-100');
    }
    document.querySelector('#checkMsg').innerText = words.length;
    ale.playbackRate = +1;
    if( isSpaced && e.data !== " " && e.data !== null ){
      ale.play();
    } else if (e.inputType === 'deleteContentBackward') {
      if(nextTransition) {
        ale.play();
      }
    }
    if(document.querySelector('#checkMsg').innerText==='10') {
      document.querySelector('#checkMsg').classList.replace('text-rose-500','text-green-500');
    }
  } else {
    document.querySelector('#checkMsg').classList.replace('opacity-100','opacity-0');
    if(ale.playbackRate === 1){
      ale.playbackRate = -1;
      ale.play();
    }
    document.querySelector('#correctMsg').classList.replace('opacity-100','opacity-0');
  }

  nextTransition = words[words.length-1].length === 1 && words.length !== 1;
  // Checking for previous value was a space 
  isSpaced = e.data === " " ;
});
