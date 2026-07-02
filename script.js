document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded ✿');

    const colors = [
        '#fff8ef',
        '#fef6ff',
        '#f3fff5',
        '#f0f8ff'
    ];

    let current = 0;

    setInterval(() => {
        current = (current + 1) % colors.length;
        document.body.style.backgroundColor = colors[current];
    }, 4000);
});
