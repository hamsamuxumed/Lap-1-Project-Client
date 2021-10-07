const sortByButton = document.getElementById('sortByButton');
sortByButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let articles = document.querySelectorAll('.entryCard');
    if (sortByButton.innerHTML === 'Most Recent') {
        sortByButton.innerHTML = 'Most Reacted To'
    } else if (sortByButton.innerHTML === 'Most Reacted To') {
        sortByButton.innerHTML = 'Most Recent'
    };

    for (let article of articles) {
        article.classList.toggle('noDisplay');
    };
});
