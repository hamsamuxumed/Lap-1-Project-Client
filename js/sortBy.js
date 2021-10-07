// Get sortBy to work on new entries as well
// convert [object Object] to display entry

const dateButton = document.getElementById('sortByDateButton');
dateButton.addEventListener('click', async (event) => {
    event.preventDefault();
    getData("recent");
});

const reactionsButton = document.getElementById('sortByReactionButton');
reactionsButton.addEventListener('click', async (event) => {
    event.preventDefault();
    getData();
});

async function getData(criteria) {
    let entries = await axios.get('https://caffeine-overflow-server.herokuapp.com/entries');
    getSortedEntries(entries, criteria);
};

async function getSortedEntries(data, criteria="reactions") {
    let recentEntry = document.getElementById('sortByDate');
    let reactionEntry = document.getElementById('sortByReactions');
    let response;

    if (criteria === "recent") {
        data.data.sort(function(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date)
            return dateB - dateA;
        });
        response = recentEntry;
    } else {
        data.data.sort(function(a, b) {
            let entryA = parseInt(a.reactions.happy + a.reactions.love + a.reactions.angry);
            let entryB = parseInt(b.reactions.happy + b.reactions.love + b.reactions.angry);
            return entryB - entryA;
        });
        response = reactionEntry;
    };
    
    // For each entry in data
    for (let i = 0; i < data.data.length; i++) {
        console.log(data.data[i])
        createNewEntry(data.data[i]);
        // console.log(`response: ${response}`)
        // console.log(`data.data: ${data.data.length}`)
        // if (response.length === data.data.length) {
        //     break;
        // } else {
            response.append(data.data[i]);
        // }
    };
    console.log('creating done')
};

