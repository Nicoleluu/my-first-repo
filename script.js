// script.js

function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Welcome to my website!";
}

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Personal website loaded');

    const button = document.getElementById('demoButton');
    const messageArea = document.getElementById('messageDisplay');

    button.addEventListener('click', function() {

        const message = `
Hi, I'm Nicole Lu.

I'm an industrial designer studying at RISD, interested in computational design, systems thinking, and human-centered technology.

My work explores the relationship between behavior, tools, and space through product design, UX, and interactive systems.

Currently, I’m building projects across AI, design strategy, and computational workflows.
        `;

        messageArea.textContent = message;

        button.textContent = 'Nice to meet you!';

        setTimeout(function() {
            button.textContent = 'Learn More About Me';
        }, 3000);
    });
});
