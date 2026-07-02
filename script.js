document.addEventListener("DOMContentLoaded", function () {
    const subtitle = document.querySelector(".subtitle");

    const originalText = "why should we become a dachshund owner?";
    const newText = "small legs, big heart, forever love";

    subtitle.addEventListener("mouseenter", function () {
        subtitle.textContent = newText;
    });

    subtitle.addEventListener("mouseleave", function () {
        subtitle.textContent = originalText;
    });
});
