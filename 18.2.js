const h1 = document.querySelector('h1');
console.log(h1);
// h1.style.color = 'blue';
h1.classList.toggle('new_h1');

const p = document.querySelector('p');
// p.style.fontSize = '30px';
p.classList.toggle('p_new');

const description = document.getElementById('description');
console.dir(description);
description.classList.add('#description');

const body = document.querySelector('body');
body.classList.add('body');

const title = document.querySelector('title');
title.innerText = 'Modifying EX';