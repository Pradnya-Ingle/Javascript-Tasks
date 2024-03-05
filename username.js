function displayText() {
    var userInput = prompt('Enter text:');
    if (userInput !== null && userInput) {
        var newDiv = document.createElement('div');
        newDiv.className = 'output-box';
        newDiv.innerHTML = userInput;
        document.getElementById('container').appendChild(newDiv);
    }
     else {
        alert('Please enter your name.');
    }
}