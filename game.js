let dialogIndex = 0;
const dialogs = [
    "You find yourself locked in a mysterious room.",
    "A strange character appears and says: 'Hello, I see you're stuck here too.'",
    "The character tells you: 'You must solve the puzzle to escape.'",
    "You look around for clues to help you unlock the door."
];

let gameState = "start"; // Can be "start", "solved", "escaped"

// Function to start or continue the dialog
function talkToCharacter() {
    if (gameState === "start") {
        showDialog(dialogs[dialogIndex]);
    }
}

// Show dialog box with text
function showDialog(text) {
    const dialogBox = document.getElementById('dialog-box');
    const dialogText = document.getElementById('dialog-text');
    dialogText.textContent = text;
    dialogBox.style.display = "block";
}

// Go to the next dialog or finish the game
function nextDialog() {
    dialogIndex++;
    if (dialogIndex < dialogs.length) {
        showDialog(dialogs[dialogIndex]);
    } else {
        gameState = "solved";
        document.getElementById('game-message').textContent = "You must now solve the puzzle to escape!";
        document.getElementById('dialog-box').style.display = "none";
    }
}

// Function for when the player clicks the door
function openDoor() {
    if (gameState === "solved") {
        gameState = "escaped";
        document.getElementById('game-message').textContent = "You have escaped the room! Congratulations!";
        document.getElementById('dialog-box').style.display = "none";
    } else {
        document.getElementById('game-message').textContent = "The door is locked. You need to solve the puzzle first.";
    }
}
