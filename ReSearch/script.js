const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');

const resultPopup = document.getElementById('resultPopup');
const closeButton = document.getElementById('closeButton');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupAuthor = document.getElementById('popupAuthor');
const overlay = document.getElementById('overlay');

function openPopup(title, description, author) {
    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupAuthor.textContent = 'Author: ' + author;
    overlay.style.display = 'block';
}

function closePopup() {
    overlay.style.display = 'none';
}

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const url = 'https://zshadowskilled1.github.io/AppsFiles/ReSearch/Results/results.json';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const matchingResults = data.filter(entry => 
            entry.title.toLowerCase().includes(query.toLowerCase()) ||
            entry.description.toLowerCase().includes(query.toLowerCase()) ||
            entry.author.toLowerCase().includes(query.toLowerCase()) ||
            entry.smalldescription.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(matchingResults);
    } catch (error) {
        console.error('Error fetching or processing results:', error);
    }
});

function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach(entry => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');
        resultElement.innerHTML = `
            <h2 class="result-title">${entry.title}</h2>
            <p>${entry.smalldescription}</p>
            <p>Author: ${entry.author}</p>
            <button class="open-button">Open</button>
        `;
        resultsContainer.appendChild(resultElement);

        const openButton = resultElement.querySelector('.open-button');
        const titleElement = resultElement.querySelector('.result-title');

        openButton.addEventListener('click', () => {
            openPopup(entry.title, entry.description, entry.author);
        });

        titleElement.addEventListener('click', () => {
            openPopup(entry.title, entry.description, entry.author);
        });
    });
}

closeButton.addEventListener('click', () => {
    closePopup();
});
