const button = document.getElementById("askButton");
var submitted = false
var labels = document.querySelectorAll('label');
var inputs = document.querySelectorAll('.formInput');
const formTitle = document.querySelector('.formTitle');
const formItem = document.getElementById("formMenu");
const submitButton = document.querySelector('.submitButton');
const checkboxElement = document.querySelector('.checkbox');

button.addEventListener("click", function () {

    const formItem = document.getElementById("formMenu");
    formItem.style.transform = "translateX(75%)";
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

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function (event) {
    formItem.style.transform = "translateX(200%)";
});

window.addEventListener("click", function (event) {
    if ((!formItem.contains(event.target) && event.target != button)) {
        formItem.style.transform = "translateX(200%)";
    }
});