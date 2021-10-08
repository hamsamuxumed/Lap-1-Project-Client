const search = document.querySelector('#formGifSearch');
search.addEventListener('change', async (event) => {
    event.preventDefault()
    const searchTerm = event.target.parentElement.childNodes[3].value;
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=L8NZ2ooXz2otBXVDkffxMXzUVYL7AuQ3&limit=3&q=${searchTerm}`);
    const iframes = document.querySelectorAll('.formGif');
    const radioButtons = document.querySelectorAll('.gifSelector');
    for (let [index, frame] of iframes.entries()) {
        frame.src = res.data.data[index].embed_url;
        radioButtons[index].value = res.data.data[index].embed_url;
    }
    const gifs = document.querySelector('#gifSection')
    gifs.classList.remove('noDisplay');
});

const postsSection = document.querySelector('main')
postsSection.addEventListener('click', async (event) => {
    if (event.target.nodeName === 'BUTTON' && event.target.classList.contains('commentSectionButton')) {
        try {
            const ID = event.target.id
            const commentsSection = document.querySelector(`#commentsSection-${ID}`);
            commentsSection.classList.toggle("noDisplay");
        } catch {
            console.log('error in the first if of the main event listner')
        }
    } else if (event.target.classList.contains('emoji')) {
        const emojiID = event.target.parentElement.id
        const emojiType = event.target.parentElement.className
        const id = emojiID.split('d')
        const idNum = id[id.length - 1]
        console.log(id[id.length - 1])
        const happy = document.querySelector(`#happy-id${idNum}`)
        const love = document.querySelector(`#love-id${idNum}`)
        const angry = document.querySelector(`#angry-id${idNum}`)
        const data = await axios.get(`https://caffeine-overflow-server.herokuapp.com/entries`);
        const dataArray = data.data
        const dataOfId = (dataArray[idNum - 1])

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
    } else if (event.target.nodeName === 'BUTTON' && event.target.classList.contains('addCommentButton')) {
        event.preventDefault();
        try {
            const ID = event.target.id;
            const idNumber = ID.split("d")[1];
            const commentContent = {
                text: event.target.previousElementSibling.value,
                author: "test username"
            }
            const response = await axios.post(`https://caffeine-overflow-server.herokuapp.com/entries/comments/${idNumber}`, commentContent);

            const newCommentsArticle = document.createElement('article');
            const newAuthor = document.createElement('h3');
            const newText = document.createElement('p');

            newCommentsArticle.classList.add('comment');
            newAuthor.classList.add('commentAuthor');
            newText.classList.add('commentText');
            newText.append(response.data.text);
            newAuthor.append(response.data.author);
            newCommentsArticle.id = `articleComment-id${response.data.id}`
            newCommentsArticle.append(newAuthor);
            newCommentsArticle.append(newText);

            const deleteCommentButton = document.createElement('button');
            deleteCommentButton.append('Delete Comment');
            deleteCommentButton.id = `deleteCommentButton-id${response.data.id}`
            deleteCommentButton.classList.add('deleteCommentButton')
            newCommentsArticle.append(deleteCommentButton)

            const commentSection = document.querySelector(`#commentsSection-id${idNumber}`);
            commentSection.append(newCommentsArticle);
        } catch {
            console.log('error in the third if of the main event listner')
        }
    } else if (event.target.nodeName === 'BUTTON' && event.target.classList.contains('deleteEntryButton')) {
        const ID = event.target.id;
        const idNumber = ID.split("d")[2];
        const response = await axios.delete(`https://caffeine-overflow-server.herokuapp.com/entries/delete/${idNumber}`, { data: { idNumber } });
        const article = document.querySelector(`#entryArticle-id${idNumber}`);
        article.classList.add("noDisplay");
    } else if (event.target.nodeName === 'BUTTON' && event.target.classList.contains('deleteCommentButton')) {
        const entryId = event.target.parentElement.parentElement.id;
        const entryIdNumber = entryId.split("d")[1]
        const commentId = event.target.id;
        const commentIdNumber = commentId.split("d")[2]
        const response = await axios.delete(`https://caffeine-overflow-server.herokuapp.com/entries/comments/delete/${entryIdNumber}/${commentIdNumber}`, { data: { commentIdNumber } });
        const comment = document.querySelector(`#articleComment-id${commentIdNumber}`);
        comment.classList.add("noDisplay");
    };
});

window.addEventListener('load', async (e) => {
    const data = await axios.get(`https://caffeine-overflow-server.herokuapp.com/entries`);
    const dataObject = data.data;
    const section = document.querySelector('#entrySection');

    dataObject.sort(function (a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
    });
    for (let entry of dataObject) {
        let newEntry = createNewEntry(entry);
        section.append(newEntry);
    }

    dataObject.sort(function (a, b) {
        let entryA = parseInt(a.reactions.happy + a.reactions.love + a.reactions.angry);
        let entryB = parseInt(b.reactions.happy + b.reactions.love + b.reactions.angry);
        return entryB - entryA;
    });
    for (let entry of dataObject) {
        let newEntry = createNewEntry(entry);
        newEntry.classList.add("noDisplay");
        section.append(newEntry);
    }
})

const createNewEntry = (entry) => {
    // create header
    const newHeader = document.createElement('header')
    const newUsername = document.createElement('a')
    const newDate = document.createElement('p')
    newHeader.classList.add('entryHeader')
    newUsername.classList.add('entryUsername')
    newDate.classList.add('entryDate')
    newUsername.href = `https://caffeine-overflow-server.herokuapp.com/entries/${entry.username}`
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
    newButton.append('View All Comments')
    newCommentsDiv.append(newButton)

    const deleteButton = document.createElement('button');
    deleteButton.append('Delete Entry');
    deleteButton.id = `deleteButton-id${entry.id}`
    deleteButton.classList.add('noDisplay')
    deleteButton.classList.add('deleteEntryButton')
    console.log('delete button')
    newCommentsDiv.append(deleteButton)

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
    newArticle.id = `entryArticle-id${entry.id}`
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
    const newSubmitInput = document.createElement('button')
    newCommentsForm.action = ''
    newCommentsForm.classList.add('commentsForm')
    newCommentsForm.id = `commentForm-id${entry.id}`
    newTextInput.type = 'text'
    newTextInput.placeholder = 'Add comment here'
    newTextInput.id = `textInput-id${entry.id}`
    newTextInput.name = `textInput-id${entry.id}`
    // newSubmitInput.type = 'submit'
    // newSubmitInput.value = 'Add'
    newSubmitInput.classList.add('addCommentButton')
    newSubmitInput.id = `submitInput-id${entry.id}`
    newSubmitInput.append('Add Comment')
    // newSubmitInput.name = `submitInput-id${entry.id}`
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
    return newArticle;
};
