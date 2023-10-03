const text = document.getElementById('text-area');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // console.log(text.value.length)
    if (text.value.length >= 100) {
        console.log("submitted!");
        btn.classList.add('btn1')
    } else {
        console.log("please enter 100 character before submitting!");
        btn.classList.add('btn2');
    }
});
