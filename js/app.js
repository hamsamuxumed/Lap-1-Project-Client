const search = document.querySelector('#search');
search.addEventListener('change', async (event) => {
    const searchTerm = event.srcElement.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=1&q=${searchTerm}`);
    const data = res.data;
    console.log(data)
    let source = res.data.images.original.url
    // console.log(res.data);
    // console.log(res.data[0]);
//     const iframe = document.createElement('IFRAME');
//     iframe.src = res.data[0].url;
//     document.body.append(iframe);
});

// L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3 this is our giphy API key