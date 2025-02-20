const CORRECT_SEQUENCE = ["c", "c", "g", "g", "a", "a", "g", "f", "e", "d", "c"];
const noteToMidi = {
    "c": 60, "d": 62, "e": 64, "f": 65, "g": 67, "a": 69, "b": 71
};

document.getElementById("playButton").addEventListener("click", () => {
    const inputs = document.querySelectorAll(".note-field");
    let userNotes = Array.from(inputs).map(input => input.value.trim().toLowerCase());
    
    let isCorrect = true;
    for (let i = 0; i < CORRECT_SEQUENCE.length; i++) {
        if (userNotes[i] !== CORRECT_SEQUENCE[i]) {
            isCorrect = false;
            break;
        }
    }
    
    playNotes(userNotes);

    const message = document.getElementById("message");
    if (isCorrect) {
        message.textContent = "✅ Correct! Elius awakens and saves Galliae!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Incorrect answer!";
        message.style.color = "red";
        inputs.forEach(input => input.value = ""); // Clear input fields
    }
});

async function playNotes(notes) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];

        if (noteToMidi[note]) {
            let osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(
                440 * Math.pow(2, (noteToMidi[note] - 69) / 12), 
                audioCtx.currentTime
            );
            osc.connect(audioCtx.destination);
            osc.start();

            // First 6 notes: quarter notes (500ms), Last 5 notes: half notes (1000ms)
            let duration = i >= 6 ? 1000 : 500; 
            
            await new Promise(resolve => setTimeout(() => {
                osc.stop();
                resolve();
            }, duration));

            await new Promise(resolve => setTimeout(resolve, 100)); // Pause between notes
        } else {
            await new Promise(resolve => setTimeout(resolve, 600)); // Skip invalid notes
        }
    }
}
