// L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3 this is our giphy API key

const search = document.querySelector('#formGifSearch');
search.addEventListener('change', async (event) => {
    const searchTerm = event.srcElement.value;
    console.log(searchTerm);
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=3&q=${searchTerm}`);
    const iframes = document.querySelectorAll('.formGif');
    for (let [index, frame] of iframes.entries()) {
        frame.src = res.data.data[index].embed_url;
    } 
    const gifs = document.querySelector('#formGifSection')
    const selectors = document.querySelector('#gifSelectorSection')
    gifs.classList.remove('noDisplay');
    selectors.classList.remove('noDisplay');

    //might need to change the name of each selector to the url of the releated gif
});


const postsSection = document.querySelector('main')
postsSection.addEventListener('click', async (event)=>{
    console.dir(event);
    if (event.target.nodeName === 'BUTTON'){
        if (event.target.classList.contains('commentSectionButton')){
            try{
                const ID = event.target.id
                const commentsSection = document.querySelector(`#commentsSection-${ID}`);
                commentsSection.classList.toggle("noDisplay");
            } catch {
                console.log('there are no comments to display')
            }
        } 
    } else if (event.target.classList.contains('emoji')){
        const emojiID = event.target.parentElement.id
        const emojiType = event.target.parentElement.className 
        // const emoji = document.querySelector(`#${emojiID}`)
        const id = emojiID.split('')
        const idNum = id[id.length - 1]
        console.log(id[id.length - 1])
        const happy = document.querySelector(`#happy-id${idNum}`)
        const love = document.querySelector(`#love-id${idNum}`)
        const angry = document.querySelector(`#angry-id${idNum}`)
        const data = await axios.get(`https://caffeine-overflow-server.herokuapp.com/entries`);
        const dataArray = data.data
        const dataOfId = (dataArray[idNum-1])

        if (emojiType === 'happy') {
            happy.innerHTML = `<span class="emoji">&#128512;</span>${dataOfId.reactions.happy + 1}`
            love.innerHTML = `<span class="emoji">&#10084;&#65039;</span> ${dataOfId.reactions.love}`
            angry.innerHTML = `<span class="emoji">&#128545;</span> ${dataOfId.reactions.angry}`
        } else if (emojiType === 'love') {
            happy.innerHTML = `<span class="emoji">&#128512;</span>${dataOfId.reactions.happy}`
            love.innerHTML = `<span class="emoji">&#10084;&#65039;</span> ${dataOfId.reactions.love + 1}`
            angry.innerHTML = `<span class="emoji">&#128545;</span> ${dataOfId.reactions.angry}`
        } else if (emojiType === 'angry') {
            happy.innerHTML = `<span class="emoji">&#128512;</span>${dataOfId.reactions.happy}`
            love.innerHTML = `<span class="emoji">&#10084;&#65039;</span> ${dataOfId.reactions.love}`
            angry.innerHTML = `<span class="emoji">&#128545;</span> ${dataOfId.reactions.angry + 1}`
        }
    }
})

window.addEventListener('load', async (e) => {
    const data = await axios.get(`https://caffeine-overflow-server.herokuapp.com/entries`);
    const dataObject = data.data
    const main = document.querySelector('main')
    for (let entry of dataObject){
        const newArticle = createNewEntry(entry)
        main.append(newArticle)
    }
})


const createNewEntry = (entry) => {
    // create header
    const newHeader = document.createElement('header')
    const newUsername = document.createElement('p')
    const newDate = document.createElement('p')
    newHeader.classList.add('entryHeader')
    newUsername.classList.add('entryUsername')
    newDate.classList.add('entryDate')
    newUsername.href = 'goes to page of just entries from that author'
    newUsername.append(entry.username)
    newDate.append(entry.date)
    newHeader.append(newUsername)
    newHeader.append(newDate)
    //create title and text
    const newTitle = document.createElement('h2')
    const newMessage = document.createElement('p')
    newTitle.append(entry.title)
    newMessage.append(entry.message)
    //create gif section
    const newSection = document.createElement('section')
    const newIframe = document.createElement('iframe')
    newSection.classList.add('gif')
    newIframe.classList.add('giphy-embed')
    newIframe.src = entry.gifUrl
    newIframe.width = "480"
    newIframe.height = "331"
    newIframe.border = "0"
    newSection.append(newIframe)
    //create footer
    const newFooter = document.createElement('footer')
    const newCommentsDiv = document.createElement('div')
    const newButton = document.createElement('button')
    const newEmojiDiv = document.createElement('div')
    const newHappyP = document.createElement('p')
    const newLoveP = document.createElement('p')
    const newAngryP = document.createElement('p')
    newFooter.classList.add('entryFooter')
    newCommentsDiv.classList.add('comments')
    newButton.classList.add('commentSectionButton')
    newButton.id = `id${entry.id}`
    newEmojiDiv.classList.add('entryEmojiSection')
    newHappyP.classList.add('happy')
    newLoveP.classList.add('love')
    newAngryP.classList.add('angry')
    newHappyP.id = `happy-id${entry.id}`
    newLoveP.id = `love-id${entry.id}`
    newAngryP.id = `angry-id${entry.id}`
    newButton.append('comments section')
    newCommentsDiv.append(newButton)
    newHappyP.innerHTML = `<span class="emoji">&#128512;</span>${entry.reactions.happy}`
    newLoveP.innerHTML = `<span class="emoji">&#10084;&#65039;</span>${entry.reactions.love}`
    newAngryP.innerHTML = `<span class="emoji">&#128545;</span>${entry.reactions.angry}`
    newEmojiDiv.append(newHappyP)
    newEmojiDiv.append(newLoveP)
    newEmojiDiv.append(newAngryP)
    newFooter.append(newCommentsDiv)
    newFooter.append(newEmojiDiv)

    //create article
    const newArticle = document.createElement('article')
    newArticle.classList.add('entryCard')
    newArticle.append(newHeader)
    newArticle.append(newTitle)
    newArticle.append(newMessage)
    newArticle.append(newSection)
    newArticle.append(newFooter)

    //creating comments section
    const newCommentsSection = document.createElement('section');
    newCommentsSection.classList.add('commentsSection');
    newCommentsSection.classList.add('noDisplay');
    newCommentsSection.id = `commentsSection-id${entry.id}`;

    //creating comments form within comments section
    const newCommentsForm = document.createElement('form');
    const newTextInput = document.createElement('input')
    const newSubmitInput = document.createElement('input')
    newCommentsForm.action = ''
    newTextInput.type = 'text'
    newTextInput.placeholder = 'Add comment here'
    newTextInput.id = `textInput-id${entry.id}`
    newTextInput.name = `textInput-id${entry.id}`
    newSubmitInput.type = 'submit'
    newSubmitInput.value = 'Add'
    newSubmitInput.id = `submitInput-id${entry.id}`
    newSubmitInput.name = `submitInput-id${entry.id}`
    newCommentsForm.append(newTextInput)
    newCommentsForm.append(newSubmitInput)
    newCommentsSection.append(newCommentsForm)

    newArticle.append(newCommentsSection)

    //create comments section
    for (let comment of entry.comments) {
        const newCommentsArticle = document.createElement('article');
        const newAuthor = document.createElement('h3');
        const newText = document.createElement('p');
        
        newCommentsArticle.classList.add('comment');
        newAuthor.classList.add('commentAuthor');
        newText.classList.add('commentText');
        newText.append(comment.text);
        newAuthor.append(comment.author); 
        newCommentsArticle.append(newAuthor);
        newCommentsArticle.append(newText);
        newCommentsSection.append(newCommentsArticle);
    }
    return newArticle
}

