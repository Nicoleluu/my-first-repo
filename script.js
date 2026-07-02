document.addEventListener("DOMContentLoaded", function () {
    const subtitle = document.querySelector(".subtitle");

    const originalText = "Industrial Designer";
    const newText = "RISD → Columbia GSAPP";

    subtitle.addEventListener("mouseenter", function () {
        subtitle.textContent = newText;
    });

    subtitle.addEventListener("mouseleave", function () {
        subtitle.textContent = originalText;
    });
});
