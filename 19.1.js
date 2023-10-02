const startHere_li = document.querySelector('.start-here');
console.log(startHere_li);

startHere_li.textContent = 'main text';

const uls = document.querySelectorAll('ul');
console.log(uls);
const ul2 = uls[1];
const sub4 = document.createElement('li');
sub4.textContent = "sub title 4";
ul2.append(sub4);

const lastElement = ul2.lastElementChild
ul2.removeChild(lastElement);

const title =document.querySelector('title');
title.textContent = 'Master Of The Dom';

const p = document.querySelector('p');
console.log(p);
p.innerText = 'hello from me'

