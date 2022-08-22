const playerList = document.getElementById('player-list');

document.body.addEventListener('click', event => {
    //If any 'SELECT BUTTON' is clicked 
    if (event.target.innerText === 'Select') {
        //Only add new player name if total number of players is less then or equal to 5
        if (playerList.childNodes.length <= 5) {
            //Take the 'h3' tag under the parent of which 'SELECT BUTTON' is clicked
            const playerNameTag = event.target.parentNode.getElementsByTagName('h3');
            const playerName = playerNameTag[0].innerText;

            const playerNameNode = document.createTextNode(playerName);
            const makeNewListItem = document.createElement("li");

            makeNewListItem.appendChild(playerNameNode);
            playerList.appendChild(makeNewListItem);

            //Disable the button once clicked and modified some styles of the button
            event.target.setAttribute('disabled', true);
            event.target.classList.remove('shadow', 'hover:shadow-md', 'hover:shadow-teal-600')
            event.target.classList.add("bg-black", 'text-gray-400');

        }
        //Gives a alert message if player list already has 5 player 
        else alert('You can not select more than 5 players')
    }
    else if (event.target.innerText === 'Calculate') {
        console.log('Calcule is clicked');
    }
    else if (event.target.innerText === 'Calculate Total') {
        console.log('Calcule Total is clicked');
    }

})

