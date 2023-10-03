// const btn = document.getElementById('btn');
// btn.addEventListener('click',()=>{alert('hello')});
// btn.addEventListener('mouseover',function(){
//     btn.innerText = 'stop touching me!'
// });
// btn.addEventListener('mouseout',function(){
//     btn.innerText='click me!';
// });
// const btn2 = document.getElementById('btn2');
// btn2.addEventListener('mouseover',function(){
//     const h = Math.floor(Math.random()*window.innerHeight);
//     const w = Math.floor(Math.random()*window.innerWidth);
//     btn2.style.left = `${w}px`;
//     btn2.style.top = `${h}px`;
// });

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const h1 = document.querySelector('h1');
const printColor = function () {
    console.log(this);
    console.log(this.style.backgroundColor);
}
const header1 = function () {
    h1.style.color = this.style.backgroundColor;
}
const boxes = document.getElementById('boxes');
colors.forEach((color) => {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    boxes.append(box);
    box.addEventListener('click', printColor);
    box.addEventListener('click', header1);
});
document.body.addEventListener('keypress', function (e) {
    console.log(e);

});

const sec2 = document.querySelector('#sec2');
const input = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute('placeholder', "User Name")
sec2.append(input);
// input.addEventListener('keydown',function(e){
//     console.log("Key Down!");
// });
//input capture second task
const sec3 = document.getElementById('sec3');
const ul = document.createElement('ul');
sec3.append(ul);
input.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        if (!this.value) return;
        const li = document.createElement('li');
        const text = this.value;
        li.innerText = text;
        ul.appendChild(li);
        this.value = '';
    }
});

// forms third task
const creditCard = document.getElementById('cc');
const checkBox = document.getElementById('check');
const select = document.getElementById('selec1');
const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
    alert('submitted the form!');
    console.log("CreditCard:", creditCard.value);
    console.log("checkBox:", checkBox.checked);
    console.log("select:", select.value);

    e.preventDefault();
});

const formData = {};

creditCard.addEventListener('input', e => {
    console.log('cc changed!', e);
    formData['card'] = creditCard.value;
});

select.addEventListener('input', e => {
    console.log('select changed!', e);
    formData['select'] = select.value;
})

checkBox.addEventListener('input', e => {
    console.log('checkBox changed!', e);
    formData['check'] = e.target.checked;
})




