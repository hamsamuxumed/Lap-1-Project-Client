// Weather API here - sidebar
// function weatherAPI() {
//     console.log('Weather API');
// }

// POST request - Entry form
const form = document.querySelector('.entryForm');
form.addEventListener('submit', submitEntry);

async function submitEntry(e) {
    e.preventDefault();
    let gifUrl;

    if (e.target[4].checked) {
        gifUrl = e.target[4].value;
    } else if (e.target[5].checked) {
        gifUrl = e.target[5].value;
    } else if (e.target[6].checked) {
        gifUrl = e.target[6].value;
    }

    const body = {
        title: e.target[0].value,
        username: "test username",
        message: e.target[2].value,
        gifUrl: gifUrl
    }

    const response = await axios.post('http://localhost:3000/entries', body);
    let newEntry = createNewEntry(response.data);
    const main = document.querySelector('main');
    main.prepend(newEntry);
}


// // POST request - Comment form
// const commentForm = document.querySelector('.commentsForm');
// commentForm.addEventListener('click', submitComment);

// async function submitComment(e) {
//     e.preventDefault();
//     console.log(e);

//     // const body = {
//     //     text: e.target[0].value;
//     //     author: "test username"
//     // }

//     // const response = await axios.post('http://localhost:3000/entries/comments/:id', body);
//     // let newEntry = createNewEntry(response.data);
//     // const main = document.querySelector('main');
//     // main.prepend(newEntry);
// }

// DELETE comment

// DELETE entry

// UPDATE entry

// UPDATE reactions
