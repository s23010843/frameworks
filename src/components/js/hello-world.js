const buttons = document.querySelectorAll('button.alert-btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('JavaScript is working!');
    });
});
