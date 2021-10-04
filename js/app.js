// L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3 this is our giphy API key

const search = document.querySelector('#search');
search.addEventListener('change', async (event) => {
    const searchTerm = event.srcElement.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=3&q=${searchTerm}`);
    console.log(res.data.data[0].images.original.url)
    console.log(res.data.data);
    const iframe1 = document.createElement('IFRAME');
    const iframe2 = document.createElement('IFRAME');
    const iframe3 = document.createElement('IFRAME');
    iframe1.src = res.data.data[0].images.original.url;
    iframe2.src = res.data.data[1].images.original.url;
    iframe3.src = res.data.data[2].images.original.url;
    document.querySelector('.gifSearch').append(iframe1);
    document.querySelector('.gifSearch').append(iframe2);
    document.querySelector('.gifSearch').append(iframe3);
});

