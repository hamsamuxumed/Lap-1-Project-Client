// window.onload = function() {
//     getData("recent")
//     getData("reactions")
// };

// async function getData(criteria) {
//     let entries = await axios.get('https://caffeine-overflow-server.herokuapp.com/entries');
//     getSortedEntries(entries, criteria);
// }

// async function getSortedEntries(data, criteria="reactions") {
//     let recentEntry = document.getElementById('sortByDate');
//     let reactionEntry = document.getElementById('sortByReactions');
//     let response;

//     console.log(data.data);

//     if (criteria === "recent") {
//         data.data.sort(function(a, b) {
//             let dateA = new Date(a.date);
//             let dateB = new Date(b.date)
//             return dateB - dateA;
//         });
//         response = recentEntry;
//     } else {
//         data.data.sort(function(a, b) {
//             let entryA = parseInt(a.happy + a.love + a.angry);
//             let entryB = parseInt(b.happy + b.love + b.angry);
//             return entryB - entryA;
//         });
//         response = reactionEntry;
//     }

//     // For each entry in data
//     for (let i = 0; i < data.data.length; i++) {
//         console.log(i)
//         // let reactions = { data.data[i].reactions.happy,  }
//         createNewEntry(i);
//         response.append(i);
//     }
// }

