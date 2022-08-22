
const playerList = document.getElementById('player-list');
const inputError = 'Please put a number in input field'

function inputValue(input) {
    //this function takes an input tag id and return the value inside it in number or Nan. And it clear the input field also.
    const inputNumber = parseFloat(document.getElementById(input).value);
    document.getElementById(input).value = '';
    return inputNumber;
}

function setValue(id, value) {
    //This fucntion set a value to a given id.
    const field = document.getElementById(id);
    field.innerText = value;
}


document.body.addEventListener('click', event => {
    const playerNumber = playerList.childNodes.length;
    //If any 'SELECT BUTTON' is clicked 
    if (event.target.innerText === 'Select') {
        //Only add new player name if total number of players is less then or equal to 5
        if (playerNumber <= 5) {
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
        const onePlayerCost = inputValue('per-player');
        if (!isNaN(onePlayerCost)) {
            const playersCost = onePlayerCost * (playerNumber - 1);
            setValue('player-expenses', playersCost)
        }
        else {
            alert(inputError);
        }
    }
    else if (event.target.innerText === 'Calculate Total') {
        const managerCost = inputValue('manager');
        const coachCost = inputValue('coach');
        const playerCostString = document.getElementById('player-expenses').innerText;
        const playerCost = parseFloat(playerCostString);

        if (!isNaN(managerCost) && !isNaN(coachCost) && !isNaN(playerCost)) {
            const totalCost = managerCost + coachCost + playerCost;
            setValue('total', totalCost);
        }
        else {
            alert(inputError);
        }




    }

})

