const button = document.getElementById("askButton");
var submitted = false
var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('.formInput');
const formTitle = document.querySelector('.formTitle');
const formItem = document.getElementById("formMenu");
const submitButton = document.querySelector('.submitButton');
const checkboxElement = document.querySelector('.checkbox');

var labelsBottom = document.querySelectorAll('.labelBottom');
var inputsBottom = document.querySelectorAll('.inputBottom');
var textAreaBottom = document.querySelector('.formInputBottom');
const formTitleBottom = document.querySelector('.formTitleBottom');
const submitButtonBottom = document.querySelector('.submitButtonBottom');

button.addEventListener("click", function () {

    const formItem = document.getElementById("formMenu");
    formItem.style.transform = "translateX(30%)";
    submitted = false
    var max = labels.length > inputs.length ? labels.length : inputs.length
    for (var i = 0; i < max; i++) {
        if (labels.length > i) labels[i].style.display = "block";
        if (inputs.length > i) inputs[i].style.display = "block";
    }
    textAreaBottom.style.display = "block";

    formTitle.style.top = "0%";
    formTitle.textContent = "Tell us what you need and we will contact you back!";
    submitButton.textContent = "Submit";
    submitButton.style.top = "0%";
});

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function (event) {
    formItem.style.transform = "translateX(200%)";
});

window.addEventListener("click", function (event) {
    if ((!formItem.contains(event.target) && event.target != button)) {
        formItem.style.transform = "translateX(200%)";
    }
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
                textAreaBottom.style.display = "block";
            })
            .catch(error => {
                // Handle errors
            });
    }
    else formItem.style.transform = "translateX(200%)";
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
        console.log({ textAreaBottom })
        textAreaBottom.style.display = "none";

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
                submitButtonBottom.style.fontSize = "1vw";
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

        textAreaBottom.style.display = "block";
        formTitleBottom.style.top = "0%";
        formTitleBottom.textContent = "Tell us what you need and we will contact you back!";
        submitButtonBottom.textContent = "Submit";
        submitButtonBottom.style.top = "0%";
        submitted = false;
    }
});