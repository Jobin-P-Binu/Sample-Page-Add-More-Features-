// 1. Theme Toggle
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    const isDark = body.getAttribute('data-theme') === 'dark';

    if (isDark) {
        body.setAttribute('data-theme', 'light');
        button.innerText = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        button.innerText = '☀️';
    }
}

// 2. Greeting Logic (with Typing Effect)
const messages = [
    "System initializing...",
    "Access granted.",
    "Welcome to the matrix.",
    "Hacking in progress...",
    "Secure connection established.",
    "Hello! Welcome to the dashboard."
];

function typeWriter(text, elementId, speed = 50) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    let i = 0;

    // blinking cursor effect during typing
    element.style.borderRight = "2px solid var(--primary-color)";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor blink after typing
            element.style.borderRight = "none";
        }
    }
    type();
}

function changeText() {
    const messageElement = document.getElementById("message");
    const currentText = messageElement.innerText;
    let newText = messages[Math.floor(Math.random() * messages.length)];

    while (newText === currentText) {
        newText = messages[Math.floor(Math.random() * messages.length)];
    }

    typeWriter(newText, "message");
}

// 3. Counter Logic
let count = 0;

function updateCounter(change) {
    count += change;
    document.getElementById("count").innerText = count;
}

// 4. Character Count Logic
function updateCharCount() {
    const textarea = document.getElementById("text-input");
    const charCountElement = document.getElementById("char-count");
    charCountElement.innerText = textarea.value.length;
}