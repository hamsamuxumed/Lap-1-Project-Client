// POST request - Entry form
const form = document.querySelector('#postButton');
form.addEventListener('click', submitEntry);

async function submitEntry(e) {
    e.preventDefault();
    let gifUrl;

    if (e.target.parentElement[3].checked) {
        gifUrl = e.target.parentElement[3].value;
    } else if (e.target.parentElement[4].checked) {
        gifUrl = e.target.parentElement[4].value;
    } else if (e.target.parentElement[5].checked) {
        gifUrl = e.target.parentElement[5].value;
    };

    const body = {
        title: e.target.parentElement[0].value,
        username: 'test username',
        message: e.target.parentElement[1].value,
        gifUrl: gifUrl
    };

    const response = await axios.post('https://caffeine-overflow-server.herokuapp.com/entries', body);
    let newEntry = createNewEntry(response.data);
    const section = document.querySelector('#appendNewEntryToHere');
    const dateButton = document.getElementById('sortByButton');
    if (dateButton.innerHTML === 'Most Recent') {
        section.prepend(newEntry);
    } else if (dateButton.innerHTML === 'Most Reacted To') {
        section.append(newEntry);
    };
    const deleteButton = document.querySelector(`#deleteButton-id${response.data.id}`);
    deleteButton.classList.toggle('noDisplay');
};
