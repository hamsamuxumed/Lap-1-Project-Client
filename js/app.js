// L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3 this is our giphy API key

const search = document.querySelector('#search');
search.addEventListener('change', async (event) => {
    const searchTerm = event.srcElement.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=3&q=${searchTerm}`);
    console.log(res.data.data[0].images.original.url)
    console.log(res.data.data);
    const iframe1 = document.querySelector('#gif1');
    const iframe2 = document.querySelector('#gif2');
    const iframe3 = document.querySelector('#gif3');
    iframe1.src = res.data.data[0].embed_url;
    iframe2.src = res.data.data[1].embed_url;
    iframe3.src = res.data.data[2].embed_url;
    // add a form with radial buttons and then change its display property when a gif search is made
});

//we are going to have issues getting this working on new posts 
//need to find way of getting this to work on each comment section
const commentsSection = document.querySelector('#commentSection');
const commentsButton = document.querySelector('#commentSectionButton')
commentsButton.addEventListener('click', () => {
    commentsSection.classList.toggle("noDisplay");
})

