const p = document.getElementById('p1');
const btn1 = document.getElementById('plus');
const btn2 = document.getElementById('minus');
let fontSize = 16;

btn1.addEventListener('click', () => {
    if (fontSize >= 6 && fontSize < 100) {
        fontSize += 5;
        p.style.fontSize = `${fontSize}px`;
    }
});

btn2.addEventListener('click', () => { 
    if (fontSize > 6) { 
        fontSize -= 5;
        p.style.fontSize = `${fontSize}px`; 
    }
});
