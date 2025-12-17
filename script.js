let clickCount = 0;

document.getElementById('myButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('output').textContent = `You clicked the button ${clickCount} time(s)!`;
});
