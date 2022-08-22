const removeBtn = document.getElementById('remove');
const playerList = document.getElementById('player-list');
const childNumber = document.getElementById('player-list').childNodes;

document.body.addEventListener('click', event => {
    if (event.target.innerText === 'Select') {
        if (childNumber.length <= 5) {
            const playerNameTag = event.target.parentNode.getElementsByTagName('h3');
            const playerName = playerNameTag[0].innerText;
            const playerNode = document.createTextNode(playerName);

            const AddList = document.createElement("li");
            AddList.appendChild(playerNode);
            playerList.appendChild(AddList);

            console.log()

            event.target.setAttribute('disabled', true);
            event.target.classList.remove('shadow', 'hover:shadow-md', 'hover:shadow-teal-600')
            event.target.classList.add("bg-black", 'text-gray-400');
            removeBtn.classList.remove('hidden');

        }
        else alert('You Can no select more than 5 players')
    }
    else if (event.target.innerText === 'Calculate') {
        console.log('Calcule is clicked');
    }
    else if (event.target.innerText === 'Calculate Total') {
        console.log('Calcule Total is clicked');
    }

})

removeBtn.addEventListener('click', () => {
    playerList.removeChild(playerList.lastElementChild);
    if (childNumber.length <= 1) {
        removeBtn.classList.add('hidden');
    }
})
