// Add an event listener to detect when the user scrolls
window.addEventListener("scroll", function () {
    // Calculate the opacity based on scroll position
    const opacity = 1 - window.scrollY / (document.body.clientHeight - window.innerHeight);

    // Update the opacity of the shaded side
    document.querySelector(".shaded-side").style.opacity = opacity.toFixed(2);

    // Add a class to trigger the fade-out transition when opacity is close to 0
    if (opacity < 0.05) {
        document.querySelector(".shaded-side").classList.add("fade-out");
    } else {
        document.querySelector(".shaded-side").classList.remove("fade-out");
    }
});
