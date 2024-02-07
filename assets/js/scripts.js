function darkmode() {
    var bodyElement = document.body;
    var navigationElement = document.querySelector('.navigation');
    var mainElement = document.querySelector('.main');
    var topElement = document.querySelector('.Top');

    bodyElement.classList.toggle('dark-mode');
    navigationElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        bodyElement.style.backgroundColor = '#000000'; // Completely dark
        bodyElement.style.color = 'aliceblue';

        navigationElement.style.backgroundColor = '#4E2C2A'; // A bit darker than original
        navigationElement.style.color = 'aliceblue';

        mainElement.style.backgroundColor = '#444444'; // Dark grey
        mainElement.style.color = 'aliceblue';

        topElement.style.backgroundColor = '#444444'; // Dark grey
        topElement.style.color = 'rgb(255, 255, 255)';
    } else {
        bodyElement.style.backgroundColor = '#B8252F';
        bodyElement.style.color = '';
        navigationElement.style.backgroundColor = '#5C3A37'; // Original color
        navigationElement.style.color = '';

        mainElement.style.backgroundColor = '#332929'; // Original color
        mainElement.style.color = 'aliceblue';

        topElement.style.backgroundColor = '#332929'; // Original color
        topElement.style.color = 'rgb(255, 255, 255)';
    }
}
