// Weather API here - sidebar
// function weatherAPI() {
//     console.log('Weather API');
// }

// POST request - Entry form
const form = document.querySelector('#postButton');
form.addEventListener('click', submitEntry);

async function submitEntry(e) {
    e.preventDefault();
    let gifUrl;

    console.dir(e.target)

    if (e.target.parentElement[3].checked) {
        gifUrl = e.target.parentElement[3].value;
    } else if (e.target.parentElement[4].checked) {
        gifUrl = e.target.parentElement[4].value;
    } else if (e.target.parentElement[5].checked) {
        gifUrl = e.target.parentElement[5].value;
    }

    const body = {
        title: e.target.parentElement[1].value,
        username: "test username",
        message: e.target.parentElement[2].value,
        gifUrl: gifUrl
    }

    const response = await axios.post('http://localhost:3000/entries', body);
    let newEntry = createNewEntry(response.data);
    const deleteButton = document.createElement('button');
    deleteButton.append('Delete Entry');
    deleteButton.id = `id${response.data.id}`
    console.log('delete button')
    const main = document.querySelector('main');
    main.prepend(newEntry);
    main.prepend(deleteButton);
}

// DELETE comment

// DELETE entry

// UPDATE entry

// UPDATE reactions
