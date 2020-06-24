document.addEventListener("DOMContentLoaded", () => {

/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"
header.style.backgroundColor = "blue"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


// for (let i=0; i< PLAYERS.length; i++){
        
//     const newPlayer = document.createElement("div")
//     newPlayer.className = "player"
//     newPlayer.dataset.number = `${PLAYERS[i].number}`
//     newPlayer.innerHTML =`<h3>
//                             ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)
//                         </h3>
//                         <img src=${PLAYERS[i].photo} alt=${PLAYERS[i].name}>`
    

//     const players = document.getElementsByClassName("player-container")[0]
//     players.appendChild(newPlayer)
    

// }

function makeAPlayer(array){

    
    for (let i=0; i< array.length; i++){
        
        // function createAndAppendPlayer (array[i]) {
        const newPlayer = document.createElement("div")
        newPlayer.className = "player"
        newPlayer.dataset.number = `${array[i].number}`
        newPlayer.innerHTML =`<h3>
                                ${array[i].name} (<em>${array[i].nickname}</em>)
                            </h3>
                            <img src=${array[i].photo} alt=${array[i].name}>`
        
 
        const players = document.getElementsByClassName("player-container")[0]
        players.append(newPlayer)
        // }

        // createAndAppendPlayer(array[i])

    }


}

makeAPlayer(PLAYERS)







/***** Deliverable 4 *****/

const raheem = document.querySelector("div[data-number='7']")

raheem.remove()

});
