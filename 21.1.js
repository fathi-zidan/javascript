const sec1 = document.getElementById('sec1');
const input = document.createElement('input');
const button = document.createElement('button');
const ul = document.createElement('ul');
button.classList.add('button');
button.innerText = 'Submit';
input.setAttribute('placeholder', "Enter Age");
sec1.append(input);
sec1.append(button);
sec1.append(ul);

button.addEventListener('click', function () {
    const age = parseInt(input.value);
    if (age >= 18) {
        const li = document.createElement('li');
        li.innerText = `you can drink your age is ${age}`
        ul.append(li);
        input.value = '';
    } else {
        const li = document.createElement('li');
        li.innerText = `you are too young your age is ${age}`
        ul.append(li);
        input.value = '';
    }
});

