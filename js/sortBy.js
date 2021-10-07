const dateButton = document.getElementById('sortByButton');
dateButton.addEventListener('click', async (event) => {
    event.preventDefault();
    let articles = document.querySelectorAll('.entryCard');
    if (dateButton.innerHTML === "Most Recent") {
        dateButton.innerHTML = "Most Reacted To"
    } else if (dateButton.innerHTML === "Most Reacted To") {
        dateButton.innerHTML = "Most Recent"
    }

    for (let article of articles) {
        article.classList.toggle("noDisplay");
    }
});

async function getSortedEntries(data, criteria="reactions") {
    let recentEntry = document.getElementById('recentEntries');
    let reactionEntry = document.getElementById('reactedEntries');
    let entryData = data.data;

    if (criteria === "recent") {
        entryData.sort(function(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
        });
        for (let data of entryData) {
            let newEntry = createNewEntry(data);
            recentEntry.append(newEntry);
        }
    } else {
        entryData.sort(function(a, b) {
            let entryA = parseInt(a.reactions.happy + a.reactions.love + a.reactions.angry);
            let entryB = parseInt(b.reactions.happy + b.reactions.love + b.reactions.angry);
            return entryB - entryA;
        });
        for (let data of entryData) {
            let newEntry = createNewEntry(data);
            reactionEntry.append(newEntry);
        };
    };
};

