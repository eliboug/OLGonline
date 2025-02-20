/* General Styling */
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    background: linear-gradient(135deg, #1E1E2E, #252541);
    color: #E3E3E3;
    text-align: center;
    padding: 20px;
}

/* Container */
.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    margin: auto;
    backdrop-filter: blur(10px);
}

h1 {
    font-size: 26px;
    color: #FFD700;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    color: #A0A0A0;
}

/* Input Fields */
#noteInputs {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
}

.note-field {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background: #33334D;
    color: white;
    outline: none;
    transition: 0.3s;
}

.note-field:focus {
    background: #45456B;
}

/* Play Button */
button {
    background-color: #FFD700;
    color: #1E1E2E;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: #FFC107;
    transform: scale(1.05);
}

/* Message Styling */
#message {
    font-size: 18px;
    margin-top: 15px;
    font-weight: bold;
    transition: 0.3s;
}

.success {
    color: #00FF00;
}

.error {
    color: #FF4C4C;
}
