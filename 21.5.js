const input = document.getElementById('in');
const btn = document.getElementById('btn');
const sec2 = document.getElementById('sec2');

btn.addEventListener('click',function(){
    const num = parseInt(input.value);
    if(isNaN(num) || num<=0){
        errorMessage.textContent = "Please enter a valid positive number.";
        errorMessage.style.display = "block";
        input.value = '';
        return;
    }
    errorMessage.style.display = "none";
    // input.value = '';
    sec2.innerText = '';
    for(let i=0 ;i<num;i++){
        const emoji= document.createElement('div');
        // img.setAttribute("class","fa-solid fa-face-smile-beam");
        // img.style.color = '#f6fa00';
        emoji.innerText = `😁`;
        emoji.classList.add('emoji');
        sec2.append(emoji);
        input.value = '';
    }
})

