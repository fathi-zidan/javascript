const bulb = document.getElementById('bulb');

bulb.addEventListener('click', () => {
    if (bulb.src.includes('lightoff.jpg')) {
        bulb.src = 'lighton.jpg';
    } else {
        bulb.src = 'lightoff.jpg';
    }
});