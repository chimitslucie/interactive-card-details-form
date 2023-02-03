const regexName = /^[a-zA-Z-]+$/;
const regexNumber = /^[0-9]$/;
const firstName = document.querySelector("#name");
const number = document.querySelector("#cardnumber");
const date = document.querySelectorAll(".date");
const cvc = document.querySelector("#cvc");
const errorName = document.querySelector(".error-name");
const errorNumber = document.querySelector(".error-number");
const errorDate = document.querySelector(".error-date");
const errorCvc = document.querySelector(".error-cvc");
const button = document.querySelector(".request__btn");

function validateName(firstName) {
    if (!firstName.value.match(regexName)) {
        errorName.classList.add("error");
        firstName.classList.add("error");
    } else {
        errorName.classList.remove("error");
        firstName.classList.remove("error");
    }
}

function validateNumber(number) {
    if (!number.value.match(regexNumber)) {
        errorNumber.classList.add("error");
        number.classList.add("error");
    } else {
        errorNumber.classList.remove("error");
        number.classList.remove("error");
    }
}

function validateDate(dates) {
    let inError = false;
    let fieldInError = 0;

    dates.forEach(function (date, position) {
        date.classList.remove("error");

        if (date.value == "") {
            inError = true;
            fieldInError = position;
        }
    });

    if (inError === true) {
        errorDate.classList.add("error");
        dates[fieldInError].classList.add("error");
    } else {
        errorDate.classList.remove("error");
        dates[fieldInError].classList.remove("error");
    }
}

function validateCvc(cvc) {
    if (!cvc.value.match(regexNumber)) {
        errorCvc.classList.add("error");
        cvc.classList.add("error");
    } else {
        errorCvc.classList.remove("error");
        cvc.classList.remove("error");
    }
}

button.addEventListener("click", (e) => {
    validateName(firstName);
    validateNumber(number);
    validateDate(date);
    validateCvc(cvc);
});

// -----------------------------------------

const cardInput = document.getElementById("cardnumber");
const cardText = document.querySelector(".card__number");
const cardNameInput = document.getElementById("name");
const cardNameText = document.querySelector(".card__name");
const cardMonthInput = document.getElementById("month");
const cardMonthText = document.querySelector(".month");
const cardYearInput = document.getElementById("year");
const cardYearText = document.querySelector(".year");
const cardCvcInput = document.getElementById("cvc");
const cardCvcText = document.querySelector(".card__cvc");

cardInput.addEventListener("input", (e) => {
    let newValue = e.target.value
        .replace(/[^\d]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    cardInput.value = newValue;
    cardText.innerHTML = newValue;
});

cardNameInput.addEventListener("input", (e) => {
    cardNameText.innerHTML = cardNameInput.value;
});

cardMonthInput.addEventListener("input", (e) => {
    cardMonthText.innerHTML = cardMonthInput.value;
});

cardYearInput.addEventListener("input", (e) => {
    cardYearText.innerHTML = cardYearInput.value;
});

cardCvcInput.addEventListener("input", (e) => {
    cardCvcText.innerHTML = cardCvcInput.value;
});