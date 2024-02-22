var submitted = false
var labelsBottom = document.querySelectorAll('.labelBottom');
var inputsBottom = document.querySelectorAll('.inputBottom');
const formTitleBottom = document.querySelector('.formTitleBottom');
const submitButtonBottom = document.querySelector('.submitButtonBottom');

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
        fetch("https://z9e53ofn7k.execute-api.eu-west-2.amazonaws.com/DoctoursMailSenderFunction", {
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