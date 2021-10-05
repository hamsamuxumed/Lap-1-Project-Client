let entries;

function reactionInteraction() {
    let happyEmojiSpan = document.getElementById('happy')
    happyEmojiSpan.addEventListener('click', () => {
        let happyEmojiCount = document.getElementById('happyCount');
        happyEmojiCount.textContent = parseInt(happyEmojiCount.textContent) + 1;
    })

// <p id="happy"><span>&#128512;</span> 2</p>
}

