
    function addToTextField(object) {
        const textField = document.getElementById('textfield');
        textField.value += object.value; // Voeg de letter toe aan de huidige waarde
    }

;

function removeLastCharacter() {
    const textField = document.getElementById('textfield');
    textField.value = textField.value.slice(0, -1); // Verwijdert het laatste teken
}

function copyToClipboard() {
    const textField = document.getElementById('textfield');
    textField.select(); // Selecteer de tekst in het tekstveld
    textField.setSelectionRange(0, 99999); // Voor mobiele apparaten
    navigator.clipboard.writeText(textField.value) // Kopieer de tekst naar het klembord
        .then(() => {
            showCopyMessage(); // Toon de melding
        })
        .catch(err => {
            console.error("Fout bij het kopiëren naar klembord: ", err);
        });
}

function showCopyMessage() {
    const message = document.getElementById('copyMessage');
    message.style.display = 'block'; // Maak de melding zichtbaar
    setTimeout(() => {
        message.style.display = 'none'; // Verberg de melding na 2 seconden
    }, 2000); // 2 seconden

    copyButton.blur();
}

let isCapsLockOn = false; // Houd bij of Caps Lock aan of uit is

function toggleCapsLock() {
    const buttons = document.querySelectorAll('.container button, .container2 button'); // Selecteer alle knoppen
    isCapsLockOn = !isCapsLockOn; // Wissel de status van Caps Lock

    // Pas de tekst van de knoppen aan
    buttons.forEach(button => {
        button.textContent = isCapsLockOn
            ? button.textContent.toUpperCase() // Zet tekst om naar hoofdletters
            : button.textContent.toLowerCase(); // Zet tekst om naar kleine letters
    });


}

// Pas de tekst in het tekstveld aan op basis van Caps Lock
function addToTextField(object) {
    const textField = document.getElementById('textfield');
    const valueToAdd = isCapsLockOn ? object.value.toUpperCase() : object.value.toLowerCase();
    textField.value += valueToAdd; // Voeg de letter toe aan de huidige waarde
}

function clearTextField() {
    const textField = document.getElementById('textfield');
    textField.value = ''; // Maak het tekstveld leeg
}