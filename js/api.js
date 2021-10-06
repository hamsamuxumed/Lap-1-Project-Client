async function postData(apiUrl, body) {
    try {
        const requestObj = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body)
        };

        const fetchedData = await fetch(apiUrl, requestObj);
        return fetchedData;
    } catch (err) {
        console.log(err);
    }
}

form.addEventListener('submit', submitEntry(e));

async function submitEntry(e) {
    e.preventDefault();
    console.log(e)
    const body = {
        title: e.target.title.value,
        username: e.target.username.value,
        message: e.target.message.value,
        gifUrl: "gif"
    }

    const response = await postData('https://caffeine-overflow-server.herokuapp.com/entries', body)
    console.log(response)
}
