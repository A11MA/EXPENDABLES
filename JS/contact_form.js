document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let isValid = true;

    const fields = ["name", "email", "company", "title", "message"];
    const inputEmail = document.getElementById("email");
    const inputCheckbox = document.querySelector(".js-input-checkbox");

    // funkcija klaidos pranesymas
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorText = document.getElementById(inputId + "Error");

        input.classList.add("error");
        errorText.textContent = message;
        errorText.style.display = "block";
        isValid = false;
    }

    // funkcija klaidos trinymas
    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const errorText = document.getElementById(inputId + "Error");

        input.classList.remove("error");
        errorText.style.display = "none";
    }

    // visu lauku patykrinimas 
    fields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        if (value === "") {
            showError(field);
        } else {
            clearError(field);
        }
    });

    //  Email tikrinimas ar pilnai atitinka 
    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    if (!validateEmail(inputEmail.value)) {
        showError("email");
    } else {
        clearError("email");
    }

    
    if (inputCheckbox && !inputCheckbox.checked) {
        showError("checkbox", "You must agree to the terms");
    } else if (inputCheckbox) {
        clearError("checkbox");
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});

// max mesage 250
document.getElementById("message").addEventListener("input", function () {
    const maxLength = 250;
    let messageField = this;
    let charCount = document.getElementById("charCount");

    if (messageField.value.length > maxLength) {
        messageField.value = messageField.value.substring(0, maxLength); 
    }

    charCount.textContent = `${messageField.value.length} / ${maxLength}`; 
});
