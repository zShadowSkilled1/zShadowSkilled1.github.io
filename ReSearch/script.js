const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');

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
            <h2>${entry.title}</h2>
            <p>${entry.smalldescription}</p>
            <p>Author: ${entry.author}</p>
        `;
        resultsContainer.appendChild(resultElement);
    });
}
