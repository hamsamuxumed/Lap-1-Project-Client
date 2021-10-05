


const createEntry = async (data) => {
    const data = await axios.get(`https://caffeine-overflow-server.herokuapp.com/entries`);
    const main = document.querySelector('main')
    for (let entry of data){
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
        newIframe.src = entry.gif
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
        const newHappySpan = document.createElement('span')
        const newLoveSpan = document.createElement('span')
        const newAngrySpan = document.createElement('span')
        newFooter.classList.add('entryFooter')
        newCommentsDiv.classList.add('comments')
        newButton.classList.add('commentSectionButton')
        newEmojiDiv = classList.add('entryEmojiSection')
        newHappyP = classList.add('happy')
        newLoveP = classList.add('love')
        newAngryP = classList.add('angry')
        newCommentsDiv.append(newButton)
        // newHappySpan.innerHtml = (&#128512;) 
        // newLoveSpan.append(&#10084;&#65039) 
        // newAngrySpan.append(&#128545;)
        newHappyP.innerHTML = <span>&#128512;</span>
        newLoveP.innerHTML = <span>&#10084;&#65039;</span>
        newAngryP.innerHTML = <span>&#128545;</span>
        newEmojiDiv.append(newHappyP)
        newEmojiDiv.append(newLoveP)
        newEmojiDiv.append(newAngryP)
        newFooter.append(newCommentsDiv)
        newFooter.append(newEmojiDiv)
        //create comments section

        // this will need to become a loop through the comment object
        const newCommentsSection = document.createElement('section')
        const newCommentsArticle = document.createElement('article')
        const newAuthor = document.createElement('h3')
        const newText = document.createElement('p')
        newCommentsSectiontion.classList.add('commentsSection');
        newCommentsSectiontion.classList.add('noDisplay');
        newCommentsArticleicle.classList.add('comment');
        newAuthor.classList.add('commentAuthor');
        newText.classList.add('commentText');
        newText.append(entry.c1.text)
        newAuthor.append(entry.c1.author)
        newCommentsArticle.append(newAuthor)
        newCommentsArticle.append(newText)
        newCommentsSection.append(newCommentsArticle)

        //create article
        const newArticle = document.createElement('article')
        newArticle.classList.add('entryCard')
        newArticle.append(newHeader)
        newArticle.append(newTitle)
        newArticle.append(newMessage)
        newArticle.append(newSection)
        newArticle.append(newFooter)
        newArticle.append(newCommentsSection)

        main.append(newArticle)
    }
}