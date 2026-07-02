// script.js

// Wait until the HTML page fully loads
document.addEventListener('DOMContentLoaded', function() {

    console.log('Personal website loaded');

    // Select the button and message display area
    const button = document.getElementById('demoButton');
    const messageArea = document.getElementById('messageDisplay');

    // Add click interaction
    button.addEventListener('click', function() {

        // Personal message
        const message = `
Hi, I'm Nicole Lu.

I’m an industrial designer studying at RISD, exploring computational design, UX/UI, and interactive systems.

My work focuses on the relationship between behavior, tools, and environments.

I’m interested in building systems that are not just functional, but also shape how people think, act, and connect.

Currently exploring:
• Computational Design
• AI + Design Systems
• Human-Centered Technology
• Interactive Environments
        `;

        // Display the message
        messageArea.textContent = message;

        // Change button text after click
        button.textContent = 'Thanks for visiting!';

        // Reset button after 3 seconds
        setTimeout(function() {
            button.textContent = 'Learn More About Me';
        }, 3000);
    });
});
