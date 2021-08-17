import { insertData } from './helper.js';

document.querySelector('#sumbitButton').addEventListener('click',(e)=>{
  e.preventDefault();
  const { email, msg } = Object.fromEntries(new FormData(document.querySelector('#FORM')));
  let alertText = '*' ;
  if( (msg!=='') && (email!=='') ){
    insertData(email,msg); 
  } else {
    if(msg==='' && email === ''){
      (document.querySelector('#alertEmail').innerText === "" ) ? document.querySelector('#alertEmail').innerText = alertText : null ;
      (document.querySelector('#alertMsg').innerText === "" ) ? document.querySelector('#alertMsg').innerText = alertText : null ;
    } else if (email === '') {
      (document.querySelector('#alertEmail').innerText === "" ) ? document.querySelector('#alertEmail').innerText = alertText : null ;
    } else {
      (document.querySelector('#alertMsg').innerText === "" ) ? document.querySelector('#alertMsg').innerText = alertText : null ;
    }
  }
},false);
