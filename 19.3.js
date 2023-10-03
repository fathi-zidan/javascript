const inputs = document.querySelectorAll('.verificationInput');
const form = document.getElementById('verificationForm');
const btn = document.getElementById('btn');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (index < inputs.length - 1 && input.value.trim() !== '') {
            inputs[index + 1].focus();
        }
    });
    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text').trim();
        const characters = pastedText.split('');
        //   console.log("pasted text: ",characters);
        characters.forEach((char, charIndex) => {
            inputs[charIndex].value = char;
        });
        if (is_Complete()) {
            form.submit();
        }
    });

})
function is_Complete() {
    let isComplete = true;
    verificationInputs.forEach((input) => {
        if (input.value.trim() === '') {
            isComplete = false;
        }
    });
    return isComplete;
}

btn.addEventListener('click', function () {
    form.reset();
});

