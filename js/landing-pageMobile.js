var reviceCheck1 = false;
var reviceCheck2 = false;
var reviceCheck3 = false;
var reviceCheck4 = false;
var submitted = false
var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('.formInput');
var labelsBottom = document.querySelectorAll('.labelBottom');
var inputsBottom = document.querySelectorAll('.inputBottom');
const formTitle = document.querySelector('.formTitle');
const formTitleBottom = document.querySelector('.formTitleBottom');
const submitButton = document.querySelector('.submitButton');
const submitButtonBottom = document.querySelector('.submitButtonBottom');
const formItem = document.getElementById("formMenu");
const navBar = document.getElementById("menu-items");
const checkboxElement = document.querySelector('.checkbox');
window.addEventListener("scroll", function () {
    // Get the scroll position as a value between 0 and 1
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the desired opacity based on the scroll percentage
    const desiredOpacity = 1 - scrollPercentage * 4;
    const desiredTop = -1000 * scrollPercentage;
    const serviceAnimation = 1400 * scrollPercentage;
    const servicesStart1 = -500;
    const servicesStart2 = -550;
    const servicesStart3 = -600;
    const servicesStart4 = -650;


    // Update the background color based on the scroll percentage
    const colorStart = 0.40;
    const backgroundColorR = 255 - Math.round(48 * 6 * (scrollPercentage - colorStart));
    const backgroundColorG = 255 - Math.round(26 * 6 * (scrollPercentage - colorStart));
    const backgroundColorB = 255 - Math.round(26 * 6 * (scrollPercentage - colorStart));
    const backgroundColor = `rgb(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB})`;

    // Apply the calculated opacity to the video element
    document.querySelector(".video-bg").style.opacity = desiredOpacity;
    document.querySelector(".landing-page").style.top = `${desiredTop}px`;
    if (scrollPercentage > 0.4) {
        document.querySelector(".whyDoc").style.backgroundColor = backgroundColor;
        document.querySelector(".blog").style.backgroundColor = backgroundColor;

        const ourServicesLinks = document.querySelectorAll(".our-services a");
        ourServicesLinks.forEach(link => {
            link.style.backgroundColor = backgroundColor;
        });
    }

    console.log({ scrollPercentage });
    console.log({ servicesStart1 });
    console.log({ serviceAnimation });

    document.querySelector(".whyDoc2").style.opacity = (scrollPercentage - 0.02) * 10;

    /* if (servicesStart1 + serviceAnimation < 0 && !reviceCheck1) document.querySelector(".service-container1").style.left = `${servicesStart1 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container1").style.left = 0;
        reviceCheck1 = true;
    } */
    if (servicesStart2 + serviceAnimation < 0 && !reviceCheck2) document.querySelector(".service-container2").style.left = `${servicesStart2 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container2").style.left = 0;
        reviceCheck2 = true;
    }
    /* if (servicesStart3 + serviceAnimation < 0 && !reviceCheck3) document.querySelector(".service-container3").style.left = `${servicesStart3 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container3").style.left = 0;
        reviceCheck3 = true;
    } */
    if (servicesStart4 + serviceAnimation < 0 && !reviceCheck4) document.querySelector(".service-container4").style.left = `${servicesStart4 + serviceAnimation}%`;
    else {
        document.querySelector(".service-container4").style.left = 0;
        reviceCheck4 = true;
    }

    const whyScroll = -150 * scrollPercentage;
    const containerStart = 42;

    if (whyScroll > -40) document.querySelector(".container").style.top = `${containerStart + whyScroll}%`;
    if (scrollPercentage > 0.8) document.querySelector(".container").style.top = `2.17%`;
});

const button = document.getElementById("askButton");

button.addEventListener("click", function () {

    const formItem = document.getElementById("formMenu");
    formItem.style.transform = "translateX(10%)";
    submitted = false
    var max = labels.length > inputs.length ? labels.length : inputs.length
    for (var i = 0; i < max; i++) {
        if (labels.length > i) labels[i].style.display = "block";
        if (inputs.length > i) inputs[i].style.display = "block";
    }

    formTitle.style.top = "0%";
    formTitle.textContent = "Tell us what you need and we will contact you back!";
    submitButton.textContent = "Submit";
    submitButton.style.top = "0%";
});

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


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!submitted) {
        // Gather form data
        submitted = true;
        const formData = new FormData(this);

        // Convert form data to a JSON object
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });

        var max = labels.length > inputs.length ? labels.length : inputs.length
        for (var i = 0; i < max; i++) {
            if (labels.length > i) labels[i].style.display = "none";
            if (inputs.length > i) inputs[i].style.display = "none";
        }

        submitButton.style.display = "none";
        formTitle.style.top = "30%";
        formTitle.textContent = "Message is sending...";
        fetch("https://bwin4nbzb5.execute-api.eu-north-1.amazonaws.com/mailDeneme1", {
            method: "POST",
            body: JSON.stringify(formDataJson),
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors", // Use no-cors mode

        })
            .then(response => {
                // You won't be able to access response data directly
                formTitle.textContent = "Message has sent successfully";
                submitButton.style.display = "block";
                submitButton.textContent = "Go Home";
                submitButton.style.top = "50%";
            })
            .catch(error => {
                // Handle errors
            });
    }
    else formItem.style.transform = "translateX(120%)";
});


document.getElementById("contactFormBottom").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!submitted) {
        // Gather form data
        submitted = true;
        const formData = new FormData(this);
        // Convert form data to a JSON object
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        });
        var max = labelsBottom.length > inputsBottom.length ? labelsBottom.length : inputsBottom.length
        for (var i = 0; i < max; i++) {

            if (labelsBottom.length > i) labelsBottom[i].style.display = "none";
            if (inputsBottom.length > i) inputsBottom[i].style.display = "none";
        }

        submitButtonBottom.style.display = "none";
        formTitleBottom.style.top = "30%";
        formTitleBottom.textContent = "Message is sending...";
        fetch("https://bwin4nbzb5.execute-api.eu-north-1.amazonaws.com/mailDeneme1", {
            method: "POST",
            body: JSON.stringify(formDataJson),
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors", // Use no-cors mode

        })
            .then(response => {
                // You won't be able to access response data directly
                formTitleBottom.textContent = "Message has sent successfully";
                submitButtonBottom.style.display = "block";
                submitButtonBottom.textContent = "Fill a New Form";
                submitButtonBottom.style.top = "50%";
            })
            .catch(error => {
                // Handle errors
            });
    }
    else {
        var max = labelsBottom.length > inputsBottom.length ? labelsBottom.length : inputsBottom.length
        for (var i = 0; i < max; i++) {
            if (labelsBottom.length > i) labelsBottom[i].style.display = "block";
            if (inputsBottom.length > i) inputsBottom[i].style.display = "block";
        }

        formTitleBottom.style.top = "0%";
        formTitleBottom.textContent = "Tell us what you need and we will contact you back!";
        submitButtonBottom.textContent = "Submit";
        submitButtonBottom.style.top = "0%";
        submitted = false;
    }
});