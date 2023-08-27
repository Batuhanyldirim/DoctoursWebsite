var reviceCheck1 = false;
var reviceCheck2 = false;
var reviceCheck3 = false;
var reviceCheck4 = false;
window.addEventListener("scroll", function () {
    // Get the scroll position as a value between 0 and 1
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the desired opacity based on the scroll percentage
    const desiredOpacity = 1 - scrollPercentage * 4;
    const desiredTop = -1000 * scrollPercentage;
    const serviceAnimation = 900 * scrollPercentage;
    const servicesStart1 = -100;
    const servicesStart2 = -150;
    const servicesStart3 = -200;
    const servicesStart4 = -250;


    // Update the background color based on the scroll percentage
    const colorStart = 0.40;
    const backgroundColorR = 255 - Math.round(48 * 6 * (scrollPercentage - colorStart)); // Adjust the R component
    const backgroundColorG = 255 - Math.round(26 * 6 * (scrollPercentage - colorStart)); // Adjust the G component
    const backgroundColorB = 255 - Math.round(26 * 6 * (scrollPercentage - colorStart)); // Adjust the B component
    const backgroundColor = `rgb(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB})`;


    // Apply the calculated opacity to the video element
    document.querySelector(".video-bg").style.opacity = desiredOpacity;
    document.querySelector(".landing-page").style.top = `${desiredTop}px`;

    if (scrollPercentage > 0.4) {
        document.querySelector(".whyDoc").style.backgroundColor = backgroundColor;

        const ourServicesLinks = document.querySelectorAll(".our-services a");
        ourServicesLinks.forEach(link => {
            link.style.backgroundColor = backgroundColor;
        });
    }

    if (servicesStart1 + serviceAnimation < 0 && !reviceCheck1) document.querySelector(".service-container1").style.left = `${servicesStart1 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container1").style.left = 0;
        reviceCheck1 = true;
    }
    if (servicesStart2 + serviceAnimation < 0 && !reviceCheck2) document.querySelector(".service-container2").style.left = `${servicesStart2 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container2").style.left = 0;
        reviceCheck2 = true;
    }
    if (servicesStart3 + serviceAnimation < 0 && !reviceCheck3) document.querySelector(".service-container3").style.left = `${servicesStart3 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container3").style.left = 0;
        reviceCheck3 = true;
    }
    if (servicesStart4 + serviceAnimation < 0 && !reviceCheck4) document.querySelector(".service-container4").style.left = `${servicesStart4 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container4").style.left = 0;
        reviceCheck4 = true;
    }

    const whyScroll = -120 * scrollPercentage;
    const containerStart = 42;

    //console.log({ whyScroll })


    if (whyScroll > -40) document.querySelector(".container").style.top = `${containerStart + whyScroll}%`;


});

const button = document.getElementById("askButton");

button.addEventListener("click", function () {
    console.log("here");
    const formItem = document.getElementById("formMenu");
    formItem.style.transform = "translateX(10%)";

});

const formItem = document.getElementById("formMenu");
const navBar = document.getElementById("menu-items");
const checkboxElement = document.querySelector('.checkbox');
window.addEventListener("click", function (event) {
    if ((!formItem.contains(event.target) && event.target != button)) {
        formItem.style.transform = "translateX(120%)";
    }

    if (checkboxElement.checked) navBar.style.transform = "translateX(0%)";
    else navBar.style.transform = "translateX(-100%)";

    if (!navBar.contains(event.target) && event.target != checkboxElement) {
        navBar.style.transform = "translateX(-100%)";
        checkboxElement.checked = false;
    }
});

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function (event) {
    formItem.style.transform = "translateX(120%)";
});