let score = 0;

for(const id of getAllHoleIds()) {
    const hole = document.getElementById(id);
    // Write code that adds a "click" listener to the element with this id
    hole.addEventListener('click',() => { 
    //     When the user clicks on it, *if* the element has class "needs-whack" then:
        if (hole.classList.contains('needs-whack')){
    //          1. Remove the "needs-whack" class
            hole.classList.remove('needs-whack');
    //          2. Add the "animating-whack" class *for 500 milliseconds*
            hole.classList.add('animating-whack');
            setTimeout(() => {
                hole.classList.remove('animating-whack')
            }, 500);
    //          3. Increment the score by 1 (and update the score display)
            score ++;
            document.getElementById('score').textContent = 'Score:' + score;
    //          4. If the score is 45 or higher, stop the game (by clearing the interval)
            if (score >= 45){
                clearInterval(interval);
                alert('You Win!');
            }
        }
    }
    )
    console.log('Hole #${id} was clicked.');
}

// Write code that *every second*, picks a random unwhacked hole (use getRandomUnwhackedHoleId)
// and adds the "needs-whack" class
const interval = setInterval(() => {
    const holdID = getRandomUnwhackedHoleId();
    if (holdID) {
        const hole = document.getElementById(holdID);
        hole.classList.add('needs-whack');
    }
    console.log('TODO: Add the "needs-whack" class to a random hole');
}, 1000);

/**
 * @returns a random ID of a hole that is "idle" (doesn't currently contain a mole/buckeye). If there are none, returns null
 */
function getRandomUnwhackedHoleId() {
    const inactiveHoles = document.querySelectorAll('.hole:not(.needs-whack)');  // Selects elements that have class "hole" 

    if(inactiveHoles.length === 0) {
        return null;
    } else {
        const randomIndex = Math.floor(Math.random() * inactiveHoles.length);
        return inactiveHoles[randomIndex].getAttribute('id');
    }
}

/**
 * @returns a list of IDs (as strings) for each hole DOM element
 */
function getAllHoleIds() {
    const allHoles = document.querySelectorAll('.hole'); 
    const ids = [];
    for(const hole of allHoles) {
        ids.push(hole.getAttribute('id'));
    }
    return ids;
}
